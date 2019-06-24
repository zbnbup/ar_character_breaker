/*const medias = {
       audio: false,
       video: true
};

const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .then(errorCallback);

function successCallback(stream){
  video.srcObject = stream;
  };

function errorCallback(err){
  alert(err);
  };

*/


async function main() {
  // 表示用のCanvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // 画像処理用のオフスクリーンCanvas
  const offscreen = document.createElement("canvas");
  const offscreenCtx = offscreen.getContext("2d");


const medias = {
       audio: false,
       video: true
};

const video = document.getElementById("video");
const promise = navigator.mediaDevices.getUserMedia(medias);

promise.then(successCallback)
       .then(errorCallback);

function successCallback(stream){
  video.srcObject = stream;
  };

function errorCallback(err){
  alert(err);
  };

    // Canvasのサイズを映像に合わせる
    canvas.width = offscreen.width = video.videoWidth;
    canvas.height = offscreen.height = video.videoHeight;

    tick();
  };

  // 1フレームごとに呼び出される処理
  function tick() {
    // カメラの映像をCanvasに描画する
    offscreenCtx.drawImage(video, 0, 0);

/*    // イメージデータを取得する（[r,g,b,a,r,g,b,a,...]のように1次元配列で取得できる）
    const imageData = offscreenCtx.getImageData(0, 0, offscreen.width, offscreen.height);
    // imageData.dataはreadonlyなのでfilterメソッドで直接書き換える
    filter(imageData.data);

    // オフスクリーンCanvasを更新する
    offscreenCtx.putImageData(imageData, 0, 0);

    // 表示用Canvasに描画する
    ctx.drawImage(offscreen, 0, 0);

    // 次フレームを処理する
    window.requestAnimationFrame(tick);
  }

  function filter(data) {
    // 画像処理を行う
         
  }*/
}

main();


const worker = new Tesseract.TesseractWorker();
worker
  .recognize(promise)
  .then(function(result){
    console.log(result);
  });
