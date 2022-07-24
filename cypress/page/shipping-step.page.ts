class ShippingStepPage {
  private checkOutBtn: string;
  private termsServiceCheck: string;

  constructor() {
    this.checkOutBtn = ".cart_navigation button[name='processCarrier']";
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
