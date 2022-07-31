/* eslint-disable require-jsdoc */
class UploadPage {
  private uploadPageURL: string;
  private selectFile: string;
  private uploadBtn: string;
  private assert: string;
  private uploadedFile: string;

  constructor() {
    this.uploadPageURL= "https://the-internet.herokuapp.com/upload";
    this.selectFile = "#file-upload";
    this.uploadBtn = "#file-submit";
    this.assert = "#content > div > h3";
    this.uploadedFile = "#uploaded-files";
  }

  public visitUploadPage(): void {
    cy.visit(this.uploadPageURL);
  }

  public uploadFile(file: string): void {
    cy.get(this.selectFile).attachFile(file);
    cy.get(this.uploadBtn).click();
  }

  public assertConfirmation(msg: string, fileName: string): void {
    cy.get(this.assert).should("have.text", msg);
    cy.get(this.uploadedFile).should("contain", fileName);
  }
}

export {UploadPage};
