describe('Search elements ',function(){
    beforeEach(()=>{
        cy.visit('/');

    })
    it('search for elements with multiple results',()=>{
        cy.search('dress');
        cy.contain('dress');
    })
    it('Search for elements with no results',()=>{
        cy.search('dqwertys');
        cy.containAlert('No results were found for your search');
    })
})