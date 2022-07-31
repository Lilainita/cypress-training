import {UploadPage} from "../page/index";

describe("Upload/Download Test", () =>{
  let upload: UploadPage;
  let fileName: string;
  let assertMsg: string;

  before(() => {
    upload = new UploadPage();
    fileName = "example.json";
    assertMsg = "File Uploaded!";
  });

  it("Uploading a File", () => {
    upload.visitUploadPage();
    upload.uploadFile(fileName);
    upload.assertConfirmation(assertMsg, fileName);
  });
});
