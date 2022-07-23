import {MenuContentPage} from "../page/menu-content.page";
import {ProductListPage} from "../page/products-list.page";
import {ShoppingCartPage} from "../page/shopping-cart.page";
import {LoginPage} from "../page/login.page";
import {AddressStepPage} from "../page/address-step.page";
import {ShippingStepPage} from "../page/shipping-step.page";
import {PaymentStepPage} from "../page/payment-step.page";
const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginProcess = new LoginPage();
const addressStep = new AddressStepPage();
const shippingStep = new ShippingStepPage();
const paymentStep = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productListPage.addToCart();
    productListPage.proceedToCheckOutPopUpWindow();

    shoppingCartPage.proceedToCheckOut();

    loginProcess.login();
    loginProcess.signIn();

    addressStep.proceedToCheckOut();

    shippingStep.checkTS();
    shippingStep.proceedToCheckOut();

    paymentStep.selectBankWirePayment();
    paymentStep.confirmOrder();

    cy.get("#center_column > div > p > strong").should("have.text", "Your order on My Store is complete.");
  });
});
