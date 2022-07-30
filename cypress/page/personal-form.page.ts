class PersonalFormPage {
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: string;
  private birthDate: string;
  private mobile: string;
  private hobbies: string;
  private currentAddress: string;
  private state: string;
  private city: string;
  private submitBtn: string;
  private personalFormPageURL: string;
  private modalTitle: string;

  constructor() {
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.email = "#userEmail";
    this.gender = "#genterWrapper";
    this.mobile = "#userNumber";
    this.birthDate = "#dateOfBirthInput";
    this.hobbies = "#hobbiesWrapper";
    this.currentAddress = "#currentAddress";
    this.state = "#react-select-3-input";
    this.city = "#react-select-4-input";
    this.submitBtn = "#submit";
    this.personalFormPageURL = "https://demoqa.com/automation-practice-form";
    this.modalTitle = "#example-modal-sizes-title-lg";
  }

  public visitFormPage(): void {
    cy.visit(this.personalFormPageURL);
  }

  public fillForm(userInfo: PersonalInfo): void {
    cy.get(this.firstName).type(userInfo.name);
    cy.get(this.lastName).type(userInfo.lastName);
    cy.get(this.email).type(userInfo.email);
    cy.get(this.gender).find(`input[value = '${userInfo.gender}']`).click({force: true});
    cy.get(this.mobile).type(userInfo.mobileNumber);
    cy.get(this.birthDate).type(`{selectall}${userInfo.dateOfBirth}{enter}`);
    userInfo.hobbies.forEach((hobbie) => {
      cy.get(this.hobbies).find(".custom-control-label").filter(`:contains("${hobbie}")`).click();
    });
    cy.get(this.currentAddress).type(userInfo.currentAddress);
    cy.get(this.state).type(`${userInfo.state} {enter}`, {force: true});
    cy.get(this.city).type(`${userInfo.city} {enter}`, {force: true});
    cy.get(this.submitBtn).click({force: true});
  }

  public verifyModalTitle(assertMsg: string): void {
    cy.get(this.modalTitle).should("have.text", assertMsg);
  }
}

interface PersonalInfo{
  name: string,
  lastName: string,
  email: string,
  gender: string,
  mobileNumber: string,
  dateOfBirth: string,
  hobbies: string[],
  currentAddress: string,
  state: string,
  city: string
}

export {PersonalFormPage};
