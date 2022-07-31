import {UploadPage, DownloadPage} from "../page/index";

describe("Upload/Download Test", () =>{
  let upload: UploadPage;
  let fileName: string;
  let assertMsg: string;
  let download: DownloadPage;

  before(() => {
    upload = new UploadPage();
    download = new DownloadPage();
    fileName = "example.json";
    assertMsg = "File Uploaded!";
  });

  it("Uploading a File", () => {
    upload.visitUploadPage();
    upload.uploadFile(fileName);
    upload.assertConfirmation(assertMsg, fileName);
  });

  it("Downloading a File", () => {
    download.visitDownloadPage();
    download.downloadFile(fileName);
    download.verifyFile(fileName);
  });
});
