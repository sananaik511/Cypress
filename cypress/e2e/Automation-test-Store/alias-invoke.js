/// <reference types='cypress' />

describe('Alias and invoke', () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.greaterThan', 4)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it("Validate product thumbnail", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.thumbnail').as('ProductList')
        cy.get('@ProductList').should('have.length', 16)
        cy.get('@ProductList').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it.only("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/")
        let sum = 0; 
        // cy.get('.thumbnail').as('ProductList')
        // cy.get('@ProductList').find('.oneprice').each(($el, index, $list) => {
        //     const normalPrice = $el.text()
        // })

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        var itemTotal = 0; 
        
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var i = 0; 
            for(i=0; i<itemPrice.length; i++)
            {
                cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            itemTotal += itemPriceTotal; 
            cy.log('The total of non sale item price is : ' +itemPriceTotal)
        })

       
        cy.get('@saleItemPrice').then($linkText => {
            var saleitemsPrice = 0
            var saleItemPrice = $linkText.split('$')
            var i = 0; 
            for(i=0; i<saleItemPrice.length; i++)
            {
                cy.log(saleItemPrice[i])
                saleitemsPrice += Number(saleItemPrice[i])
            }
            itemTotal += saleitemsPrice; 
            cy.log('The total of non sale item price is : ' +saleitemsPrice)
        })

        .then( () => {
            cy.log("The total price of all products : " +itemTotal)
            expect(itemTotal).to.equal(585.5)
        })
        
    })



})