async function main() {
  // 表示用のCanvas
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // 画像処理用のオフスクリーンCanvas
  const offscreen = document.createElement("canvas");
  const offscreenCtx = offscreen.getContext("2d");


  // カメラから映像を取得するためのvideo要素
  const medias = {
         audio: false,
         video: true
  };

    const video = document.getElementById("video");
    const promise = await navigator.mediaDevices.getUserMedia(medias);

    promise.then(successCallback)
           .then(errorCallback);


    video.onloadedmetadata = () => {
    video.play();

       
    // Canvasのサイズを映像に合わせる
    canvas.width = offscreen.width = video.videoWidth;
    canvas.height = offscreen.height = video.videoHeight;

    tick();
  };


function successCallback(stream){
  video.srcObject = stream;
  };

function errorCallback(err){
  alert(err);
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
    ctx.drawImage(offscreen, 0, 0);*/




const worker = new Tesseract.TesseractWorker();
await worker
  .recognize(canvas)
  .progress(function(p) {
    // 進歩状況の表示
    console.log('progress', p)
  })
  .then(function(result){
    console.log(result);
  });





    // 次フレームを処理する
    window.requestAnimationFrame(tick);
  }

/*  function filter(data) {
    // 画像処理を行う    
  }*/
}


