///<refernece types ='Cypress' />

describe('Test Suite - Veg Mart', () =>  { 


    it('Tc 01 - Launch Veg Mart', () => {
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
cy.get('input.search-keyword').type('ca')

cy.get('div.product:visible').should('have.length',4)

cy.get('.products').find('.product').each(($e1,index,$list) =>{

    if($e1.find('h4.product-name').text().includes('Capsicum')){
        cy.wrap($e1.find('button')).contains('ADD TO CART').click()
    }
})

cy.get('img[alt="Cart"]').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
cy.get('.brand.greenLogo').should('have.text','GREENKART')
    })
})