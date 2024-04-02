/// <reference types="cypress"/>

describe('Buscar dispositivos', () => {
    it('Buscar dispositivo específico', () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/6'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
        })
    })

    it('Buscar todos dispositivos', () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
        })
    })

    it('Buscar dispositivo inexistente', () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/70',
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.be.equal(404)
            expect(res.body).is.not.empty
        })
    })
})