describe('Lista de objetos por IDs', () => {
    it('Deve buscar objetos por multiplos IDs', () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects?id=3&id=5&id=10'
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
        })
    })
})