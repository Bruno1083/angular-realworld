describe('Profile', () => {
	it('Editar Perfil', () => {
        cy.login('cavalcante1083@gmail.com', '123456789')
        cy.contains('bruno1083').click()
        cy.contains('Edit Profile Settings').click()
        cy.get('[formcontrolname="image"]').clear()
        cy.get('[formcontrolname="image"]')
        .type('https://thispersondoesnotexist.com/image')
        cy.get('[formcontrolname="password"]').type('123456789')
        cy.contains('Update Settings').click()
    })
    
})