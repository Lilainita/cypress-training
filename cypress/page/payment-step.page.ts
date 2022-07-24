class PaymentStepPage {
  private bankWirePayment: string;
  private confirmOrderBtn: string;

  constructor() {
    this.bankWirePayment = "a[title='Pay by bank wire'].bankwire";
    this.confirmOrderBtn = "#cart_navigation .button span";
  }

  public selectBankWirePayment(): void {
    cy.get(this.bankWirePayment).click();
  }

  public confirmOrder(): void {
    cy.get(this.confirmOrderBtn).click();
  }

  public assertConfirmationMessage(msg: string) {
    cy.get("#center_column p.cheque-indent strong").should("have.text", msg);
    return this;
  }
}

export {PaymentStepPage};
