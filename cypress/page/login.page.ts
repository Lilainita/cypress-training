/* eslint-disable require-jsdoc */
class LoginPage {
  private email: string;
  private psw: string;
  private signInBtn: string;

  constructor() {
    this.email = "#email";
    this.psw = "#passwd";
    this.signInBtn = "#SubmitLogin > span";
  }

  public login(): void {
    cy.get(this.email).type("aperdomobo@gmail.com");
    cy.get(this.psw).type("WorkshopProtractor");
  }

  public signIn(): void {
    cy.get(this.signInBtn).click();
  }
}

export {LoginPage};
