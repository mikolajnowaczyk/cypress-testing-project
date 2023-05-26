import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'

describe('Login Failed Test', () => {
    before(function () {
        cy.visit("/")
        Navbar.clickSignIn()
        Navbar
    })

    it('should try to login with invalid credentials', function () {
        LoginPage.login('invalid username', 'invalid password')
    })

    it('should display error message', function () {
        LoginPage.displayErrorMessage()
    })
})

describe('Login Success Test', () => {
    before(function () {
        cy.visit("/")
        Navbar.clickSignIn()
    })

    it('should login into application', function () {
        LoginPage.login('username', 'password')
    })

    it("should logout from application", () => {
        Navbar.logout();
        Navbar.displaySignInButton();
    })
})