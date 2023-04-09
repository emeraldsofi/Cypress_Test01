describe("Test Framework - Test Suite", () => {

    before(() => {

    })

    it("TC - Angula Website - Enter data", () => {

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    //cy.wait(4000)
    cy.get(".form-group input[name='name']").type('Sofi')
    cy.get('#exampleFormControlSelect1').select('Female')

    })
})