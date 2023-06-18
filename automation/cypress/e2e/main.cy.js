/// <reference types="Cypress" />
import NavBarPage from '../pageObject/navBar/navBar.po'
import homePage from '../pageObject/home/home.po'
import homeData from '../pageObject/home/home.json'

describe('template spec', () => {
    beforeEach('Navigate to page', () => {
        cy.fixture('testData').then((data) => {
            cy.visit(`${data.homePage}/`)
        })
    })

    it('Verify NavBar buttons name', () => {
        NavBarPage.verifyNavBarBrandName()
        NavBarPage.verifyNavBarHomeButtonName()
        NavBarPage.verifyNavBarResouceButtonName()
    })

    it('Verify home page title and images', () => {
        homePage.getPageTitle().should('have.text', homeData.pageTitle)

        homePage.getMainImage()
            .invoke('attr', 'src')
            .should('equal', homeData.imageSrc)
        homePage.getImageLicense().contains(homeData.imageLicense)
        homePage.getImageLicense()
            .find('a')
            .then((element) => {
                cy.wrap(element[0]).invoke('attr', 'href').should('equal', homeData.rubiksCubeImageUrl)
                cy.wrap(element[1]).invoke('attr', 'href').should('equal', homeData.rubiksCubeLicenseUrl)
            })

        homePage.getAlertMessage().should('have.text', homeData.alertMessage)

        homePage.getCitationMessage().should('have.text', homeData.citationMessage)
        homePage.getCitationAuthor().should('have.text', homeData.citationAuthor)
    })
})
