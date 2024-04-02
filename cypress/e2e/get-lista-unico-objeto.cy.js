describe('Lista objeto único', () => {
    it('Deve buscar por objeto específico', () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/6'
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body.name).to.equal("Apple AirPods")
        })
    })
    it('Não deve buscar por objeto inexistente', () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/70',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.be.equal(404)
            expect(response.body).is.not.empty
            expect(response.body.error).to.equal("Oject with id=70 was not found.")
        })
    })
})