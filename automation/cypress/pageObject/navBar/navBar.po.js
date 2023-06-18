const navBarData = require("./navBar.json")

class NavBar {
    /**
     *  GET METHODS
     */
    static getNavBarBrand() {
        return cy.get('.navbar-brand')
    }

    static getHomeButton() {
        return cy.get('.active > .nav-link')
    }

    static getResourceButton() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    /**
     *  VERIFY METHODS
     */
    static verifyNavBarBrandName() {
        this.getNavBarBrand().should('have.text', navBarData.pageBrand)
    }

    static verifyNavBarHomeButtonName() {
        this.getHomeButton().should('have.text', navBarData.homeButtonName)
    }

    static verifyNavBarResouceButtonName() {
        this.getResourceButton().should('have.text', navBarData.resourceButtonName)
    }
}

export default NavBar
