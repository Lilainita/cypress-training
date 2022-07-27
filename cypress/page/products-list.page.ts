class ProductListPage {
  private addToCartBtn: string;
  private proceedToCheckOutBtn: string;
  private productContainer: string;

  constructor() {
    this.addToCartBtn = ".button-container a[title='Add to cart']";
    this.proceedToCheckOutBtn = ".button-container a[title='Proceed to checkout']";
    this.productContainer = ".product-container";
  }

  public addToCart(productName: string): void {
    this.findProductByName(productName).find(this.addToCartBtn).click();
  }

  public proceedToCheckOutPopUpWindow(): void {
    cy.get(this.proceedToCheckOutBtn).click();
  }

  private findProductByName(productName: string) {
    return cy.get(this.productContainer).filter(`:contains(${productName})`);
  }
}

export {ProductListPage};
