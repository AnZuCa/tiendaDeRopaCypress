describe('Search elements ',function(){
    beforeEach(()=>{
        cy.visit('/');

    })
    it('search for elements with multiple results',()=>{
        cy.fixture('index.json').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();

        })
        cy.fixture('searchResult.json').then((search)=>{
            cy.get(search.title).should('contain','dress');
        })
    })
    it('Search for elements with no results',()=>{
        cy.fixture('index.json').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();

        })
        cy.fixture('searchResult.json').then((search)=>{
            cy.get(search.alert).should('contain','No results were found for your search');
        })
    })
})