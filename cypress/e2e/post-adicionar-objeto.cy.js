describe('Adicionar objeto', () => {
    it('Deve adcionar um novo objeto', () => {
        cy.api({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('name')
            expect(response.body).to.have.property('createdAt')
            expect(response.body).to.have.property('data')
        })
    })
})