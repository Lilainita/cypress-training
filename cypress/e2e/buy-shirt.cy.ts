import {MenuContentPage, ProductListPage, ShoppingCartPage, LoginPage} from "../page/index";
import {AddressStepPage, ShippingStepPage, PaymentStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginProcess = new LoginPage();
const addressStep = new AddressStepPage();
const shippingStep = new ShippingStepPage();
const paymentStep = new PaymentStepPage();


describe("Buy a t-shirt", () => {
  const email = "aperdomobo@gmail.com";
  const passwd = "WorkshopProtractor";

  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productListPage.addToCart();
    productListPage.proceedToCheckOutPopUpWindow();

    shoppingCartPage.proceedToCheckOut();

    loginProcess.login(email, passwd);

    addressStep.proceedToCheckOut();

    shippingStep.checkTS();
    shippingStep.proceedToCheckOut();

    paymentStep.selectBankWirePayment();
    paymentStep.confirmOrder();
    paymentStep.assert();
  });
});
