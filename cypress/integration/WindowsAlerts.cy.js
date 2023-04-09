import 'cypress-iframe'


describe('Test Suite - Windows and Alerts', () => {

    it('Test Case - Alerts', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.on('window:alert' , (win) =>{
          expect(win).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()

        cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 


    })


    it.skip('Test Case - Open Child tab', () => {
        //cy.visit("http://qaclickacademy.com/practice.php")
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#opentab.btn-style').invoke('removeAttr', 'target').click()
        // cy.wait(3000)
        // cy.log('Test Url' +cy.url())
     
        // cy.go('back')
        // cy.url().should('include','rahulshettyacademy')
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#opentab.btn-style').then(function(e) {
const url = e.prop('href')
cy.log("test"+url)
cy.wait(3000)
cy.origin(url, ()=>{
    cy.wait(2000)
    //cy.get('.active').should('have.text','Home')
})
       })

    })

    it.only('Test case - iframes',() =>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().then((e)=>{

            e.contains('Mentorship').click()
        e.find('.pricing-header').should('have.length','2')
        })
       // cy.iframe().contains('Mentorship').click().then(()=>{
           // cy.iframe().find('.pricing-header').should('have.length','2')
        })
      
    })