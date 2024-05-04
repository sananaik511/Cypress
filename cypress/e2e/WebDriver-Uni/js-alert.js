/// <reference types='cypress' />

describe('Handle JS alert', () => {
    it("Confirm js alert contains the correct text", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("validate java script confirm alert box works correctly when clicking on OK ", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        cy.on('window:confirm', () => {
            return true; 
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')    
    })

    it("validate java script confirm alert box works correctly when clicking on Cancel ", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()

        cy.on('window:confirm', () => {
            return false; 
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')    
    })

    //this code is not working for me 
    it.only("validate java script confirm alert box using a stub ", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        
        const stub = cy.stub
        cy.on('window:confirm', stub) 

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
})
   
});