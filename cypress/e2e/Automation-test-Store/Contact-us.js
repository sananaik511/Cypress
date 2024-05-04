describe('Test contact-us form via automation test store ', () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="contact"]').click().then(function (contactUsText) {
            console.log("The text is : " +contactUsText.text())
        })
        cy.get('#ContactUsFrm_first_name').type('sana')
        cy.get('#ContactUsFrm_email').type('sana@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('Can we order more product in a bulk?') 
        cy.get('button[title="Submit"]').click()
        cy.get('section p:nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    })
})