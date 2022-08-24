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
    static get lemonJuice1() {
        return cy.get(".mat-card.mat-focus-indicator");
    }
    static get lemonJuice1Clicked() {
        return cy.get("#mat-dialog-1");
    }
}
export default searchPage;