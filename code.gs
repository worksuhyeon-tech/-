function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
    .setTitle("Comic Cut Studio")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
