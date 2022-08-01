class DownloadPage {
  private downloadPageURL: string;
  private downloadBtn: string;

  constructor() {
    this.downloadPageURL = "https://demoqa.com/upload-download";
    this.downloadBtn = "#downloadButton";
  }

  public visitDownloadPage(): void {
    cy.visit(this.downloadPageURL);
  }

  public downloadFile():void {
    cy.get(this.downloadBtn).click();
  }

  public verifyFile(fileName: string) {
    return cy.readFile(`${Cypress.config("downloadsFolder")}/${fileName}`).should("exist");
  }
}

export {DownloadPage};
