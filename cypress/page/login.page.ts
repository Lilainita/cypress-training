class LoginPage {
  private email: string;
  private psw: string;
  private signInBtn: string;

  constructor() {
    this.email = "#email";
    this.psw = "#passwd";
    this.signInBtn = "#SubmitLogin";
  }

  public login(email:string, passwd:string): void {
    cy.get(this.email).type(email);
    cy.get(this.psw).type(passwd);
    cy.get(this.signInBtn).click();
  }
}

export {LoginPage};
