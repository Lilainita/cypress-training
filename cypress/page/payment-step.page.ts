/* eslint-disable require-jsdoc */
class PaymentStepPage {
  private bankWirePayment: string;
  private confirmOrderBtn: string;

  constructor() {
    this.bankWirePayment = "a.bankwire";
    this.confirmOrderBtn = "#cart_navigation > button > span";
  }

  public selectBankWirePayment(): void {
    cy.get(this.bankWirePayment).click();
  }

  public confirmOrder(): void {
    cy.get(this.confirmOrderBtn).click();
  }
}

export {PaymentStepPage};
