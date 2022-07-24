class ShoppingCartPage {
  private checkoutBtn: string;

  constructor() {
    this.checkoutBtn = ".cart_navigation a[title='Proceed to checkout']";
  }

  public proceedToCheckOut(): void {
    cy.get(this.checkoutBtn).click();
  }
}

export {ShoppingCartPage};
