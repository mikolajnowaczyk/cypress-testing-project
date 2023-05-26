import BasePage from "../BasePage";
export default class FeedbackPage extends BasePage {
    static load() {
        cy.visit("/feedback.html")
    }
    static submitFeedback() {
        cy.fixture('feedback').then(data => {
            const { name, email, subject, message } = data;
            cy.get('#name').type(name);
            cy.get('#email').type(email);
            cy.get('#subject').type(subject);
            cy.get('#comment').type(message);
            cy.contains("Send Message").click();
        })

    }
}