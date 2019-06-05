import React, {useState, useEffect, useRef } from "react";
import jsQR from "jsqr";

function QrCodeScanner() {
  const [msg, setMsg] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const constraints = { audio: false, video: true };
  let canvas;

  function imageData() {
    if(!canvas) {
      canvas = canvasRef.current.getContext("2d");
    }

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

  function checkFrame() {
    const image = imageData();
    var code = jsQR(image.data, image.width, image.height, {
      inversionAttempts: "dontInvert"
    });

    console.log(code);

    if (code) {
      console.log(code.data);
      setMsg(code.data);
    }
    requestAnimationFrame(checkFrame);
  }

  function successStream(stream) {
    videoRef.current.srcObject = stream;
    requestAnimationFrame(checkFrame);
  }

  function failureStream(error) {
    console.log(error);
  }

  useEffect(() => {
    navigator.getUserMedia(constraints, successStream, failureStream);
  });

  return (
    <div>
      <canvas ref={canvasRef} hidden id="canvas" />
      <video ref={videoRef} muted playsInline autoPlay />
      <p>{ msg }</p>
    </div>
  );
}

export default QrCodeScanner;