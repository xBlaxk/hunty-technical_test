const homeData = require('./home.json')

class Home {
    /**
     *   GET METHODS
     */
    static getPageTitle() {
        return cy.get('#title')
    }

    static getMainImage() {
        return cy.get('.img-fluid')
    }

    static getImageLicense() {
        return cy.get('small')
    }

    static getAlertMessage() {
        return cy.get('.alert')
    }

    static getCitationMessage() {
        return cy.get('#citation > p')
    }

    static getCitationAuthor() {
        return cy.get('#citation > footer')
    }

}

export default Home
