class AddressStepPage {
  private proceedToCheckOutBtn: string;

  constructor() {
    this.proceedToCheckOutBtn = ".cart_navigation > .button > span";
  }

  public proceedToCheckOut(): void {
    cy.get(this.proceedToCheckOutBtn).click();
  }
}

export {AddressStepPage};
