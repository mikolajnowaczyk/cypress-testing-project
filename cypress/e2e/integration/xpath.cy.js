describe("Xpath with cypress example", () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html")
    })

    it("It should click on element using xpath", () => {
        cy.xpath('//button[@id="signin_button"]').should("be.visible").click();
    })
    it("Should display login form", () => {
        cy.xpath("//form").should("have.length", 1);
    })
})