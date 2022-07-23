/* eslint-disable require-jsdoc */
class ShippingStepPage {
  private checkOutBtn: string;
  private termsServiceCheck: string;

  constructor() {
    this.checkOutBtn = ".cart_navigation > .button > span";
    this.termsServiceCheck = "#cgv";
  }

  public checkTS(): void {
    cy.get(this.termsServiceCheck).click();
  }

  public proceedToCheckOut(): void {
    cy.get(this.checkOutBtn).click();
  }
}

export {ShippingStepPage};
