/* eslint-disable require-jsdoc */
class ProductListPage {
  private addToCartBtn: string;
  private proceedToCheckOutBtn: string;
  private productContainer: string;

  constructor() {
    this.addToCartBtn = ".button-container a[title='Add to cart']";
    this.proceedToCheckOutBtn = ".button-container a[title='Proceed to checkout']";
    this.productContainer = "#center_column > ul > li > div.product-container";
  }

  public addToCart(productName: string): void {
    this.findProductByName(productName).find(this.addToCartBtn).click();
  }

  public proceedToCheckOutPopUpWindow(): void {
    cy.get(this.proceedToCheckOutBtn).click();
  }

  private findProductByName(productName: string) {
    return cy.get(this.productContainer).filter((k, el) => {
      return (el.innerText.includes(productName));
    });
  }
}

export {ProductListPage};
