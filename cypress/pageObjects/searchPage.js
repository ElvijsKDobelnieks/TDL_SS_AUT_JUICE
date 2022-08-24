import BasePage from "./basePage"

class searchPage extends BasePage {
    static get url() {
        return "http://localhost:3000/#/search";
    }
    static get seachIcon() {
        return cy.get(".mat-search_icon-search.ng-tns-c254-1");
    }
    static get searchField() {
        return cy.get("#mat-input-0")
    }
    static get lemonJuice() {
        return cy.get(".mat-card.mat-focus-indicator");
    }
    static get lemonJuice2() {
        return cy.get("[alt='Lemon Juice (500ml)']")
    }
    static get lemonJuiceClicked() {
        return cy.get("#mat-dialog-1");
    }
    static get closeDiaglogInSearch() {
        return cy.get("#mat-dialog-1")
    }
    // .cdk-dialog-container.ng-tns-c141-17
}
export default searchPage;