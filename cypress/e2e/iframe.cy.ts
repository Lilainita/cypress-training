import {IframePage} from "../page/index";

describe("Interacting with iFrame", () => {
  let iFramePage: IframePage;

  before(() => {
    iFramePage = new IframePage();
    iFramePage.visit();
  });

  it("Getting the iFrame title", () => {
    iFramePage.getFrameTitle().should("have.text", "HTML Tutorial");
  });

  it("Going to CSS iFrame Page and checking the Title", () => {
    iFramePage.goToCssPageInFrame();
    iFramePage.getFrameTitle().should("have.text", "CSS Tutorial");
  });
});
