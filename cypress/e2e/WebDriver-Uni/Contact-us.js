/// <reference types='cypress' />

describe('Test contact-us form via webdriverUni', () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //cy.get('#contact-us').click()
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')  //Assertion for cy.document 
        cy.title().should('include', 'WebDriver | Contact Us')  //assertion for title of the page using cy.title 
        cy.url().should('include', 'contactus')     //assertion for url of the page using cy.url()
        cy.get('input[name="first_name"]').type('Sahana')
        cy.get('input[name="last_name"]').type('Naik')
        cy.get('input[name="email"]').type('sana@gmail.com')
        cy.get('textarea[name="message"]').type('Test is in progress')
        cy.get('input[type="submit"]').click()
        cy.get('body div h1').should('have.text', 'Thank You for your Message!')

    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('input[name="first_name"]').type('Sahana')
        cy.get('input[name="last_name"]').type('Naik')
        cy.get('textarea[name="message"]').type('Test is in progress')
        cy.get('input[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
});