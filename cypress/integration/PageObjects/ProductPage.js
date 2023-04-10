class ProductPage{
    getCheckOutBtn(){
        return cy.get('.nav-link.btn.btn-primary')
    }

    getProductNameTxt(){
        return cy.get('h4.media-heading a')
    }
}

export default ProductPage