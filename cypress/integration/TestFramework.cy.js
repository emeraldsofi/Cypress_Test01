import HomePage from '../integration/PageObjects/HomePage'
import ProductPage from '../integration/PageObjects/ProductPage'
/// <reference types="Cypress" />
describe("Test Framework - Test Suite", () => {

    const homePage = new HomePage()
    const productPage = new ProductPage()
//let data1
    before( function () {
        // cy.fixture('TestFrameworkData').then((data1) => {
        //     this.data1 = data1
        //     cy.log("Data"+this.data1.name)
        // })



        cy.fixture('TestFrameworkData').as('testData')
     

     
    })

    it("TC - Angula Website - Enter data",  function () {
       
        // const homePage = new HomePage()
        // const productPage = new ProductPage()
    cy.visit(Cypress.env('url'))
    //cy.wait(4000)
    //data = cy.get('@testData')
    let data  = this.testData
homePage.getName().type(data.name)
    homePage.getGender().select(data.gender)
    homePage.getTwoWay().should('have.value',data.name)
homePage.getEnterprenur().should('be.disabled')
homePage.getName().should('have.attr','minlength','2')
homePage.getShopTab().click()

const productName = 'iphone X'
cy.selectProducts(productName)



productPage.getCheckOutBtn().click()
let sum =0
//Sum up the ammount
cy.get('tr td:nth-child(4) strong').each(($e1,index,$list) =>{
    let amountSplit = $e1.text().split(" ")
    let amount = Number(amountSplit[1].trim())
    cy.log('amount'+amount)
    sum = sum + amount
    cy.log("Test Sum"+ sum)
})
    cy.get('h3 strong').then((ele)=>{
        let amountSplit = ele.text().split(" ")
        let amount = Number(amountSplit[1].trim())
       expect(amount).to.equal(sum)
    })



productPage.getProductNameTxt().should('have.text',productName)
cy.get('.btn.btn-success').click()
cy.get('#country').type('India')
cy.get('div.suggestions').click()

cy.get('#checkbox2').check({force:true})
cy.get('input[value="Purchase"]').click()
cy.get('div.alert-success').then( (ele)=>{
    expect(ele.text().includes('Success')).to.be.true
})

})

    })
