describe('Post', () => {
    beforeEach(() => {
        cy.login('cavalcante1083@gmail.com', '123456789')
    })
	it('Novo', () => {       
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type('Cypress E2E')
        cy.get('[formcontrolname=description]').type('Ponta a ponta')
        cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
        cy.contains('Publish Article').click()
        cy.get('h1').contains('Cypress E2E')
    })
    
})