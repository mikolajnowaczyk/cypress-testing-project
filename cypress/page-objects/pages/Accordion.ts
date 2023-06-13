import BasePage from '../BasePage.ts'

export default class Accordion extends BasePage {
	elements = {
		accordion: () => cy.get('.accordion'),
		accordionHeader: () => cy.get('.accordion-header'),
	}
	static visit() {
		cy.visit('/accordion.html')
		cy.url().should('contain', 'accordion.html')
	}
	static checkAccordionHeaders(headers: Array<string>) {
		for (const header of headers) {
			elements.accordionHeader().should('have.text', header)
		}
	}
}
