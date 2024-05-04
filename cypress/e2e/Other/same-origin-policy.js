/// <reference types='cypress' />

describe('Cypress web security', () => {
    it("Validate visiting two different domains", () => {
        //this code should fail 
        cy.visit('https://www.webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')
       
    })
    
    //this is working fine for me 
    it("Validate visiting two different domains via user actions", () => {
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click({force:true})
       
    })

    it.only('Origin Command ', () => {
        cy.origin('https://www.webdriveruniversity.com/', () => {
            cy.visit('/')
        })

        cy.origin('https://automationteststore.com/', () => {
            cy.visit('/')
        })
        
    });
});