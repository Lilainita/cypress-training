class PaymentStepPage {
  private bankWirePayment: string;
  private confirmOrderBtn: string;
  private assert: string;

  constructor() {
    this.bankWirePayment = "a[title='Pay by bank wire'].bankwire";
    this.confirmOrderBtn = "#cart_navigation .button span";
    this.assert = ".cheque-indent strong";
  }

  public selectBankWirePayment(): void {
    cy.get(this.bankWirePayment).click();
  }

  public confirmOrder(): void {
    cy.get(this.confirmOrderBtn).click();
  }

  public assertConfirmationMessage(msg: string) {
    cy.get(this.assert).should("have.text", msg);
    return this;
  }
}

export {PaymentStepPage};
