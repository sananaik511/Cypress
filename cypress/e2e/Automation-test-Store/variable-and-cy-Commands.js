/// <reference types='cypress' />

describe('Verifying the variables, cypress commands and JQery commands', () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //the following approach will fail (But it worked for me)
        // const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        // const skinCareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        // makeupLink.click()
        // skinCareLink.click()  

        //The following approach will pass 
        const makeupLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        makeupLink.click()
        const skinCareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        skinCareLink.click() 
        
        //even below approach will pass 
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
    })

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()

        //this code will fail bcs we are using the jquery without promise (text())
        // const header = cy.get('h1 .maintext')
        // cy.log(header.text())  

        cy.get('h1 .maintext').then(function ($headerText){
            const headerText1 = $headerText.text()
            cy.log("Found the header text: " +headerText1)
            expect(headerText1).is.eq('Makeup')      //assertion for header text 
        })
    })

    it.only("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining 
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain.text', 'First name:')

        //JQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(function (text){
            const firstName = text.find('#field_11').text()
            expect(firstName).to.contain('First name:')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })

        }) 

        
    })
})