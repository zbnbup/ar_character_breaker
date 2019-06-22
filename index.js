const worker = new Tesseract.TesseractWorker();
worker
  .recognize(myImage)
  .then(function(result){
    console.log(result);
  });
