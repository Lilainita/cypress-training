class UploadPage {
  private uploadPageURL: string;
  private selectFile: string;
  private uploadBtn: string;
  private assert: string;

  constructor() {
    this.uploadPageURL= "https://the-internet.herokuapp.com/upload";
    this.selectFile = "#file-upload";
    this.uploadBtn = "#file-submit";
    this.assert = "#content > div > h3";
  }

  public visitUploadPage(): void {
    cy.visit(this.uploadPageURL);
  }

  public uploadFile(): void {
    cy.get(this.selectFile).attachFile("example.json");
    cy.get(this.uploadBtn).click();
  }

  public assertMsg(msg: string): void {
    cy.get(this.assert).should("contain", msg);
  }
}

export {UploadPage};
