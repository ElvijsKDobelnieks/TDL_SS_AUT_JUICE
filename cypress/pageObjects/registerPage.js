import BasePage from "./basePage"

class registerPage extends BasePage {
    static get url() {
        return "http://localhost:3000/#/register";
    }
    static get emailField() {
        return cy.get("#emailControl");
    }
    static get passwordField() {
        return cy.get("#passwordControl");
    }
    static get passwordFieldRepeat() {
        return cy.get("#repeatPasswordControl");
    }
    static get securityQuestionButton() {
        return cy.get(".mat-select-placeholder");
    }
    static get securityQuestionList() {
        return cy.get(".mat-select-panel-wrap>[tabindex='-1']");
    }
    static get answerField() {
        return cy.get("#securityAnswerControl");
    }
    static get registerButton() {
        return cy.get("#registerButton >.mat-button-wrapper")
    }
    static get registrationSuccessfulBox() {
        return cy.get(".mat-simple-snackbar-action>.mat-focus-indicator")
    }
}
export default registerPage;