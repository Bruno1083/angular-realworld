describe('Conduit Loguin', () => {
	it('Login sucesso', () => {
		cy.login('cavalcante1083@gmail.com', '123456789')
		cy.get('.nav-item:nth-child(4) > .nav-link').click()
		cy.get('.btn:nth-child(5)').click()
		cy.url().should('contain', '/settings')
    })
})
