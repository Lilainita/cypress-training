/* eslint-disable require-jsdoc */
class ShoppingCartPage {
  private checkoutBtn: string;

  constructor() {
    this.checkoutBtn = ".cart_navigation span";
  }

  public proceedToCheckOut(): void {
    cy.get(this.checkoutBtn).click();
  }
}

export {ShoppingCartPage};
