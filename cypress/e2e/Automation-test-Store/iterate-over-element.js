/// <reference types='cypress' />

describe('Iterate over an element', () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index : " +index + ":" +$el.text())

        });

    })

    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/")
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Parfumee au The Vert'))
            {
                cy.wrap($el).click()
            }

        });
    })
})