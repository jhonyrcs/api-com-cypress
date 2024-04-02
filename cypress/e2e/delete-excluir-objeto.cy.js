describe('Deletar objeto', () => {
    let objectId;

    before(() => {
        // Antes de cada teste, criamos um novo objeto para deletar
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
            objectId = response.body.id; // O ID do objeto criado é armazenado para usar posteriormente nos testes de atualização
        })
    })

    it('Deve deletar um objeto existente', () => {
        // Fazemos a chamada DELETE para deletar o objeto
        cy.api({
            method: 'DELETE',
            url: `https://api.restful-api.dev/objects/${objectId}`, // Usamos o ID do objeto criado anteriormente na URL
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body.message).to.equal(`Object with id = ${objectId} has been deleted.`)
        })
    })
})
