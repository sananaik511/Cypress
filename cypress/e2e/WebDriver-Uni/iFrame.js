/// <reference types='cypress' />
describe('Handling iframe and Modals', () => {
    it("Handle webdrive uni iframe and Modal", () => {
        //cypress code we write inside it 
        cy.visit("https://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
        cy.get('#fame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
    })   
});