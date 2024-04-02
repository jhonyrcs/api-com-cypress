describe('Lista de todos os objetos', () => {
    it('Deve buscar por todos objetos', () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            response.body.forEach((device) =>{
                expect(device).to.have.property('id')
                expect(device).to.have.property('name')
                expect(device).to.have.property('data')
            })
        })
    })
})