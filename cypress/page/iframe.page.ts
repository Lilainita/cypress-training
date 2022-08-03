/* eslint-disable require-jsdoc */
class IframePage {
  private iframePageURL: string;
  private cssLinkBtn: string;
  private iframePage: string;
  private cssPageURL: string;


  constructor() {
    this.iframePageURL = "https://www.w3schools.com/html/html_iframe.asp";
    this.cssPageURL = "https://www.w3schools.com/css/default.asp";
    this.cssLinkBtn = "#topnav a[title='CSS Tutorial']";
    this.iframePage = "iframe[title='W3Schools HTML Tutorial']";
  }

  public visit() {
    cy.visit(this.iframePageURL);
  }

  public getFrameTitle() {
    return cy.iframe(this.iframePage).find("h1");
  }

  public goToCssPageInFrame(): void {
    cy.iframe(this.iframePage).find(this.cssLinkBtn).click();
    cy.frameLoaded(this.iframePage, {url: this.cssPageURL});
  }
}

export {IframePage};
