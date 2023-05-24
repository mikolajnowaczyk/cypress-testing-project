describe("Searchbox text", () => {
    before(function () {
        cy.visit("");
    })

    it("should type into searchbox and submit with pressing enter", () => {
        cy.get("#searchTerm").type('some text{enter}');
    })

    it("should show search result page", () => {
        cy.get('h2').contains("Search Results:");
    })
})