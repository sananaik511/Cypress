/// <reference types='cypress' />

describe('Inspect automation store items using chain commands', () => {
    it.only("click on the first item using item text", () => {
        //cypress code we write inside it 
        cy.visit("https://automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function (itemHeaderText) {
            console.log("Selected the following items : " +itemHeaderText.text())
        })        
    })

    it("click on the first item using index", () => {
        //cypress code we write inside it 
        cy.visit("https://automationteststore.com/")
        //cy.get('.prdocutname').eq(0).click()   - this is my way, easy and direct way 
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()   //this is trainer's way using find()    
    })
})  