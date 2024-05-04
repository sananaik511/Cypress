/// <reference types='cypress' />

describe('Validate webdriverUni homepage links ', () => {
    it("Confirm link redirect to correct pages", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Contact-Us')  
        
        cy.go('back')   //for clicking on back browser button 
        cy.reload()     // refresh the page 
        //cy.reload(true)  //refresh the page without using cache 
        cy.url().should('include', 'https://www.webdriveruniversity.com/')  

        cy.go('forward')
        cy.url().should('include', 'Contact-Us')
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true}) 
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        cy.url().should('include', 'https://www.webdriveruniversity.com/')
    })

   
});