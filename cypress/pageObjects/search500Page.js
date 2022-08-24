import BasePage from "./basePage"

class search500Page extends BasePage {
    static get url() {
        return "http://localhost:3000/#/search?q=500ml";
    }
    static get lemonJuice2() {
        return cy.get("[alt='Lemon Juice (500ml)']")
    }
    static get lemonJuice2Clicked() {
        return cy.get("#mat-dialog-1");
    }
}
export default search500Page;