import BasePage from "./basePage"

class loginPage extends BasePage {
    static get url () {
        return "http://localhost:3000/#/"
    }
    static get closeCookies() {
        return cy.get(".cc-btn");
    }
      static get closeDIalog() {
        return cy.get(".close-dialog");
    } 
    static get accountButton() {
        return cy.get("#navbarAccount");
    }
    static get loginButton1() {
        return cy.get("#navbarLoginButton");
    }
    static get emailField() {
        return cy.get("#email");
    }
    static get passwordField() {
        return cy.get("#password");
    }
    static get loginButton2() {
        return cy.get("[aria-label='Login']");
    }
    static get accountMenu() {
        return cy.get(".mat-menu-content.ng-tns-c248-2");
    }
    static get notYetACustomer() {
        return cy.get("#newCustomerLink >.primary-link");
    }
    static get focusIndicator() {
        return cy.get(".mat-simple-snackbar-action > .mat-focus-indicator > .mat-button-wrapper");
    }
}
export default loginPage;