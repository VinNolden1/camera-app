"use strict";

var contsraints = {
  video: {
    facingMode: "user "
  },
  audio: false
};
var cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger");

function cameraStart() {
  navigator.mediaDevices.getUserMedia(contsraints).then(function (stream) {
    track = stream.getTracks()[0];
    cameraView.srcObject = stream;
  })["catch"](function (error) {
    console.error("Something is Broken.", error);
  });
}

cameraTrigger.onclick = function () {
  cameraSensor.width = cameraView.videoWidth;
  cameraSensor.height = camerav.videoHeight;
  cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
  cameraOutput.src = cameraSensor.toDataUrl("image/webp");
  cameraOutput.classList.add('taken');
};

window.addEventListener("load".cameraStart, false);