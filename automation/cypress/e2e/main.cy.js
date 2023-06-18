import NavBarPage from '../pageObject/navBar/navBar.po'
import homePage from '../pageObject/home/home.po'
import homeData from '../pageObject/home/home.json'

let fixtureData = {}
describe('template spec', () => {
    beforeEach('Navigate to page', () => {
        cy.fixture('testData').then((data) => {
            cy.visit(`${data.homePage}/`)
            fixtureData = data
        })
    })

    it('Verify NavBar buttons name', () => {
        NavBarPage.verifyNavBarBrandName()
        NavBarPage.verifyNavBarHomeButtonName()
        NavBarPage.verifyNavBarResouceButtonName()
    })

    it('Verify home page title and images', () => {
        homePage.getPageTitle().should('have.text', homeData.pageTitle)

        homePage
            .getMainImage()
            .invoke('attr', 'src')
            .should('equal', homeData.imageSrc)
        homePage.getImageLicense().contains(homeData.imageLicense)
        homePage
            .getImageLicense()
            .find('a')
            .then((element) => {
                cy.wrap(element[0])
                    .invoke('attr', 'href')
                    .should('equal', homeData.rubiksCubeImageUrl)
                cy.wrap(element[1])
                    .invoke('attr', 'href')
                    .should('equal', homeData.rubiksCubeLicenseUrl)
            })

        homePage.getAlertMessage().should('have.text', homeData.alertMessage)

        homePage
            .getCitationMessage()
            .should('have.text', homeData.citationMessage)
        homePage
            .getCitationAuthor()
            .should('have.text', homeData.citationAuthor)
    })

    it('Access Dynamic ID Page, verify url and title', () => {
        homePage.getDynamicIdLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.dynamicIdUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Class Attribute Page, verify url and title', () => {
        homePage.getClassAttributeLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.classAttrUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Hidden Layers Page, verify url and title', () => {
        homePage.getHiddenLayersLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.hiddenLayersUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Load Delay Page, verify url and title', () => {
        homePage.getLoadDelayLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.loadDelayUrl)
            cy.title().should('eq', `${linkText}s`)
        })
    })

    it('Access Ajax Data Page, verify url and title', () => {
        homePage.getAjaxDataLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.ajaxDataUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Client Delay Page, verify url and title', () => {
        homePage.getClientDelayLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.clientDelayUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Click Page, verify url and title', () => {
        homePage.getClickLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.clickUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Text Input Page, verify url and title', () => {
        homePage.getTextInputLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.textInputUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Scrollbars Page, verify url and title', () => {
        homePage.getScrollbarsLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.scrollbarsUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Dynamic Table Page, verify url and title', () => {
        homePage.getDynamicTableLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.dynamicTableUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Verify Text Page, verify url and title', () => {
        homePage.getVerifyTextLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.verifyTextUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Progress Bar Page, verify url and title', () => {
        homePage.getProgressbarLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.progressbarUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Visibility Page, verify url and title', () => {
        homePage.getVisibilityLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.visibilityUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Sample App Page, verify url and title', () => {
        homePage.getSampleAppLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.sampleAppUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Mouse Over Page, verify url and title', () => {
        homePage.getMouseOverLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.mouseOverUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Non-breaking Space Page, verify url and title', () => {
        homePage.getNonBreakingSpaceLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.nonBreakingSpaceUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Overlapping Elements Page, verify url and title', () => {
        homePage.getOverlappedElementLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.overlappedUrl)
            cy.title().should('eq', linkText)
        })
    })

    it('Access Shadow DOM Page, verify url and title', () => {
        homePage.getShadowDOMLink().then((link) => {
            const linkText = link.text()
            cy.wrap(link).click();
            cy.url().should('include', fixtureData.shadowDOMUrl)
            cy.title().should('eq', linkText)
        })
    })
})
