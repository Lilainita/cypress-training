class ProductListPage {
  private addToCartBtn: string;
  private proceedToCheckOutBtn: string;

  constructor() {
    this.addToCartBtn = ".button-container a[title='Add to cart']";
    this.proceedToCheckOutBtn = ".button-container a[title='Proceed to checkout']";
  }

  public addToCart(): void {
    cy.get(this.addToCartBtn).click();
  }

  public proceedToCheckOutPopUpWindow(): void {
    cy.get(this.proceedToCheckOutBtn).click();
  }
}

export {ProductListPage};
