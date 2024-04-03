describe('Atualizar objeto', () => {
    let objectId;

    before(() => {
        // Antes de cada teste, criamos um novo objeto para atualizar
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

    it('Deve atualizar um objeto existente usando PUT', () => {
        // Fazemos a chamada PUT para atualizar o objeto
        cy.api({
            method: 'PUT',
            url: `https://api.restful-api.dev/objects/${objectId}`, // Usamos o ID do objeto criado anteriormente na URL
            body: {
                "name": "New Name",
                "data": {
                    "year": 2019,
                    "price": 2049.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "color": "silver"
                }
            }
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.property('id', objectId); // Verifica se o ID do objeto é o mesmo
            expect(response.body).to.have.property('name', 'New Name'); // Verifica se o nome foi atualizado corretamente
        })
    })
})
