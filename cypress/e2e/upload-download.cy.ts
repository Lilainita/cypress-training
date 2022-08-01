import {UploadPage, DownloadPage} from "../page/index";

describe("Upload/Download Test", () =>{
  let upload: UploadPage;
  let fileName: string;
  let assertMsg: string;
  let download: DownloadPage;
  let downloadFileName: string;

  before(() => {
    upload = new UploadPage();
    download = new DownloadPage();
    fileName = "example.json";
    assertMsg = "File Uploaded!";
    downloadFileName = "sampleFile.jpeg";
  });

  it("Uploading a File", () => {
    upload.visitUploadPage();
    upload.uploadFile(fileName);
    upload.assertConfirmation(assertMsg, fileName);
  });

  it("Downloading a File", () => {
    download.visitDownloadPage();
    download.downloadFile();
    download.verifyFile(downloadFileName);
  });
});
