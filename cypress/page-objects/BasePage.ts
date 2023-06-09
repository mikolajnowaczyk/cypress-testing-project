export default class BasePage {
    static visit(url: string){
        cy.visit(url);        
    }

    static pause(ms: number) {
        cy.wait(ms)
    }

    static logInfo(message: string) {
        cy.log(message)
    }

    static setMobileViewport() {
        cy.viewport('iphone-x')
    }

    static setTableViewport() {
        cy.viewport('ipad-2')
    }

    static setDesktopViewport() {
        cy.viewport('macbook-13')
    }

    static setLargeDesktopViewport() {
        cy.viewport('macbook-15')
    }
}
