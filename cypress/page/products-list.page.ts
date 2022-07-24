class ProductListPage {
  private addToCartBtn: string;
  private proceedToCheckOutBtn: string;

  constructor() {
    this.addToCartBtn = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.proceedToCheckOutBtn = "[style*='display: block;'] .button-container > a";
  }

  public addToCart(): void {
    cy.get(this.addToCartBtn).click();
  }

  public proceedToCheckOutPopUpWindow(): void {
    cy.get(this.proceedToCheckOutBtn).click();
  }
}

export {ProductListPage};
