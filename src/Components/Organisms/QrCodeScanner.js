import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import "./QrCodeScanner.scss";

function QrCodeScanner(props) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const constraints = { audio: false, video: { facingMode: "environment" } };
  let canvas;
  const [noCameraAccess, setNoCameraAccess] = useState(false);

  function imageData() {
    if(!canvas) {
      canvas = canvasRef.current.getContext("2d");
    }

    if(videoRef.current) {
      canvasRef.current.height = videoRef.current.clientHeight;
      canvasRef.current.width = videoRef.current.clientWidth;
  
      canvas.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
  
      var image = canvas.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
  
      return image;
    }
  }

  function checkFrame() {
    const image = imageData();

    if(image) {
      var code = jsQR(image.data, image.width, image.height, {
        inversionAttempts: "dontInvert"
      });
  
      if (code) {
        props.history.push({pathname: `${process.env.PUBLIC_URL}/scanner-result`, state: { msg: code.data}});
      }
      requestAnimationFrame(checkFrame);
    }
  }

  function successStream(stream) {
    setNoCameraAccess(false);
    videoRef.current.srcObject = stream;
    requestAnimationFrame(checkFrame);
  }

  function failureStream(error) {
    setNoCameraAccess(true);
    console.log(error);
  }

  useEffect(() => {
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      successStream(stream);
    }).catch((error) => {
      failureStream(error);
    });
  });

  const renderVideo = function(){
    if (!noCameraAccess) {
      return (
        <>
          <canvas ref={canvasRef} hidden id="canvas" />
          <video ref={videoRef} muted playsInline autoPlay />
        </>
      );
    } else {
      return (
        <p>
          Please grant access to your camera and reload the page
        </p>
      )
    }
  };

  return (
    <div className="container qrcodescanner-container">
      <h2>Scan a QR code</h2>
      {renderVideo()}
    </div>
  );
}

export default QrCodeScanner;