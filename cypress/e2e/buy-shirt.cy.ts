import {
  MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

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
  const msg = "Your order on My Store is complete.";

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
    paymentStep.assertConfirmationMessage(msg);
  });
});
