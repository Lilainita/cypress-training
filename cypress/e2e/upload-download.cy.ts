import {UploadPage} from "../page/index";

describe("Upload/Download Test", () =>{
  let upload: UploadPage;
  const assertMsg = "File Uploaded!";

  before(() => {
    upload = new UploadPage();
  });

  it("Uploading a File", () => {
    upload.visitUploadPage();
    upload.uploadFile();
    upload.assertMsg(assertMsg);
  });
});
