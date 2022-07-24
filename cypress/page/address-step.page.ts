class AddressStepPage {
  private proceedToCheckOutBtn: string;

  constructor() {
    this.proceedToCheckOutBtn = ".cart_navigation button[name='processAddress']";
  }

  public proceedToCheckOut(): void {
    cy.get(this.proceedToCheckOutBtn).click();
  }
}

export {AddressStepPage};
