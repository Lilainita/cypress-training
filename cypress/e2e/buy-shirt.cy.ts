import {
  MenuContentPage,
  ProductListPage,
  ShoppingCartPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginProcess: LoginPage;
  let addressStep: AddressStepPage;
  let shippingStep: ShippingStepPage;
  let paymentStep: PaymentStepPage;
  const email = "aperdomobo@gmail.com";
  const passwd = "WorkshopProtractor";
  const msg = "Your order on My Store is complete.";
  const product = "Faded Short Sleeve T-shirts";

  before(()=> {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginProcess = new LoginPage();
    addressStep = new AddressStepPage();
    shippingStep = new ShippingStepPage();
    paymentStep = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productListPage.addToCart(product);
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
