describe('Login',function(){
    beforeEach(()=>{
        cy.visit('/');

    })
    it('Login with incorrect email',()=>{
        cy.login('something','other');
        cy.get('ol > li').should('contain','Invalid email address');
    })

})