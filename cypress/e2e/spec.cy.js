import loginPage from "../pageObjects/loginPage";
import registerPage from "../pageObjects/registerPage";
import searchPage from "../pageObjects/searchPage";
import search500Page from "../pageObjects/search500Page";

describe("juice shop", () => {
  context("login and registration", () => {
    beforeEach(() => {
      loginPage.visit();
      loginPage.closeCookies.click();
      loginPage.closeDIalog.click();
      loginPage.accountButton.click();
      loginPage.loginButton1.click();
    })
    it("logging in", () => {
      loginPage.accountButton.click();
      loginPage.loginButton1.click();
      loginPage.emailField.click();
      loginPage.emailField.type('demo');
      loginPage.passwordField.type('demo');
      loginPage.loginButton2.click();
      loginPage.accountButton.click();
      loginPage.accountMenu.should('contain', 'demo');
    })
    it("registration", () => {
      loginPage.focusIndicator.click();
      loginPage.notYetACustomer.click();
      registerPage.emailField.click();
      let randNumber = Math.floor(Math.random() * 1000);
      let email = `email${randNumber}@email.com`;
      registerPage.emailField.type(email);
      registerPage.passwordField.click();
      registerPage.passwordField.type("Password123");
      registerPage.passwordFieldRepeat.type("Password123");
      registerPage.securityQuestionButton.first().click();
      registerPage.securityQuestionList.contains("Name of your favorite pet?")
      .then(option => {option[6]}).click();
      registerPage.answerField.click();
      registerPage.answerField.type("Bob");
      registerPage.registerButton.click();
      registerPage.registrationSuccessfulBox.click();
      loginPage.emailField.click();
      loginPage.emailField.type(email);
      loginPage.passwordField.click();
      loginPage.passwordField.type("Password123");
      loginPage.loginButton2.click();
      loginPage.accountButton.click();
      loginPage.accountMenu.should("contain", email);
    })
  })
  context("scenarios 3 - 10", () => {
    beforeEach(() => {
      searchPage.visit();
      loginPage.closeCookies.click();
      loginPage.closeDIalog.click();
      loginPage.accountButton.click();
      loginPage.loginButton1.click();
      loginPage.emailField.click();
      loginPage.emailField.type('demo');
      loginPage.passwordField.click()
      loginPage.passwordField.type('demo');
      loginPage.loginButton2.click();
    })
    it("search Lemon", () => {
      searchPage.seachIcon.click({force: true});
      searchPage.searchField.type("Lemon{enter}");
      searchPage.lemonJuice1.click();
      searchPage.lemonJuice1Clicked.should("contain", "Sour but full of vitamins.");
    })
    it("search 500ml", () => {
      searchPage.seachIcon.click({force: true});
      searchPage.searchField.type("500ml{enter}");
      search500Page.lemonJuice2.click();
      search500Page.lemonJuice2Clicked.should("contain", "Sour but full of vitamins.");
    })
    it("search 500ml and validate cards", () => {
      searchPage.seachIcon.click({force: true});
      searchPage.searchField.type("500ml{enter}");
    })

  })
})