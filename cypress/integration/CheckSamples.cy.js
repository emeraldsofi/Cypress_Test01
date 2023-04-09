describe("Test Suite - Check options",() => {

    it('Test Case - Check Box', () => {
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('[type="checkbox"]').check(['option1','option3']).should('be.checked','option1').and('be.checked','option3')
})

it('Test Case - Radio button' , () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('[value="radio1"]').check().should('be.checked').and('have.value','radio1')
})

it('Test Case - Auto Suggestion' , () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('input#autocomplete').type('ind')
    cy.get('.ui-menu-item').each(($e1,index,$list)=>{
        if($e1.text()=='India'){
            cy.wrap($e1).click()
        }
    })
    cy.wait(1000)
    cy.get('input#autocomplete').should('have.value','India')

})

})