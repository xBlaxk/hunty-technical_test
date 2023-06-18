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

    /**
     *   PLAYGROUND LINK
     */
    static getDynamicIdLink() {
        return cy.get('a[href="/dynamicid"]')
    }

    static getClassAttributeLink() {
        return cy.get('a[href="/classattr"]')
    }

    static getHiddenLayersLink() {
        return cy.get('a[href="/hiddenlayers"]')
    }

    static getLoadDelayLink() {
        return cy.get('a[href="/loaddelay"]')
    }

    static getAjaxDataLink() {
        return cy.get('a[href="/ajax"]')
    }

    static getClientDelayLink() {
        return cy.get('a[href="/clientdelay"]')
    }

    static getClickLink() {
        return cy.get('a[href="/click"]')
    }

    static getTextInputLink() {
        return cy.get('a[href="/textinput"]')
    }

    static getScrollbarsLink() {
        return cy.get('a[href="/scrollbars"]')
    }

    static getDynamicTableLink() {
        return cy.get('a[href="/dynamictable"]')
    }

    static getVerifyTextLink() {
        return cy.get('a[href="/verifytext"]')
    }

    static getProgressbarLink() {
        return cy.get('a[href="/progressbar"]')
    }

    static getVisibilityLink() {
        return cy.get('a[href="/visibility"]')
    }

    static getSampleAppLink() {
        return cy.get('a[href="/sampleapp"]')
    }

    static getMouseOverLink() {
        return cy.get('a[href="/mouseover"]');
    }

    static getNonBreakingSpaceLink() {
        return cy.get('a[href="/nbsp"]');
    }

    static getOverlappedElementLink() {
        return cy.get('a[href="/overlapped"]');
    }

    static getShadowDOMLink() {
        return cy.get('a[href="/shadowdom"]');
    }

    /**
     *  VERIFY METHODS
     */
    static verifyPageTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
    }
}

export default Home
