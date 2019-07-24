import React, { useEffect, useRef } from "react";
import jsQR from "jsqr";

function QrCodeScanner(props) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const constraints = { audio: false, video: true };
  let canvas;

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
        props.history.push({pathname: '/scanner-result', state: { msg: code.data}});
      }
      requestAnimationFrame(checkFrame);
    }
  }

  function successStream(stream) {
    videoRef.current.srcObject = stream;
    requestAnimationFrame(checkFrame);
  }

  function failureStream(error) {
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

  return (
    <div class="container">
      <canvas ref={canvasRef} hidden id="canvas" />
      <video ref={videoRef} muted playsInline autoPlay />
    </div>
  );
}

export default QrCodeScanner;