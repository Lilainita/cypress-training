import {PersonalFormPage} from "../page/index";

describe("Student Registration Form", () => {
  let personalFormPage: PersonalFormPage;
  const personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "test@email.com",
    gender: "Male",
    dateOfBirth: "27 Jul 2016",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
    state: "Uttar Pradesh",
    city: "Agra",
  };
  before(()=> {
    personalFormPage = new PersonalFormPage();
  });

  it("Filling the Student Personal Info Form ...", () => {
    personalFormPage.visitFormPage();
    personalFormPage.fillForm(personalInformation);
    personalFormPage.verifyModalTitle("Thanks for submitting the form");
  });
});
