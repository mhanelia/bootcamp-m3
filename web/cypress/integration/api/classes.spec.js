/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

describe('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {

        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"Aulas Bootcamp",
                "avatar":"data:image/png;base64,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",
                "whatsapp":"11911111111",
                "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                "subject":"Matemática",
                "cost":100,
                "schedule":[
                   {
                      "week_day":"1",
                      "from":"08:00",
                      "to":"18:00"
                   }
                ]
             }

        }).then((response) =>{
            expect(response.status).to.eq(201)
            expect(response.duration).lt(200) // lt = lessThen
            console.log(response.body)

            
            expect(response.body[0])
                .to.have.property('week_day')
                .to.be.a('string')
                .eq('1')

            expect(response.body[0])
                .an('Object') // an = to.be.a
                .satisfy((length)=>{
                    return length = 1
                })

            expect(response.headers)
                .to.have.property('content-type')
                .an('string')   
                .equal('application/json; charset=utf-8')
        })
        
    });
    
});