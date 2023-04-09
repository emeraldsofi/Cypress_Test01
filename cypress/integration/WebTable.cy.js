describe('Test Suite - Web Table', ()=>{

    it('Test Case - Retrieve the text',() =>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tbody tr td:nth-child(2)').each(($e1,index,$list) => {

            const textVal = $e1.text()
            if(textVal.includes('Appium')){
                cy.get('tbody tr td:nth-child(2)').eq(index).next() .then( (ele) => {
                    const priceVal = ele.text()
                    expect(priceVal).to.equal('30')

                })

                cy.get('tbody tr td:nth-child(3)').eq(index).then((e) => {
                    const priceVal = e.text()
                    expect(priceVal).to.equal('30')

                })
            }
        })

    })
})