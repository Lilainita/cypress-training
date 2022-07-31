/* eslint-disable require-jsdoc */
class DownloadPage {
  private downloadPageURL: string;

  constructor() {
    this.downloadPageURL = "https://the-internet.herokuapp.com/download";
  }

  public visitDownloadPage(): void {
    cy.visit(this.downloadPageURL);
  }

  public downloadFile(fileName: string):void {
    // cy.downloadFile(this.downloadPageURL, route, fileName);
    cy.get(`a[href="download/${fileName}"]`).click();
  }

  public verifyFile(fileName: string) {
    return cy.readFile(`${Cypress.config("downloadsFolder")}/${fileName}`).should("exist");
  }
}

export {DownloadPage};
