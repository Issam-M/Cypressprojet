describe('connexion',function ()  {

    it('connexion réussie avec un username et un mot de passe valides',() => {

        cy.visit('https://www.saucedemo.com/')
        cy.url().should("include","saucedemo")
        cy.get('[data-test="username"]').type('standard_user').should('be.visible')
        cy.get('[data-test="password"]').type('secret_sauce').should('be.visible')
        cy.get('[data-test="login-button"]').click() 
        cy.url().should("include","inventory")
        cy.get('div[class="inventory_item_img"]').find("img").should('be.visible');

    })


    it('mot de passe ivalide',() => {

        cy.visit('https://www.saucedemo.com/')
        cy.url().should("include","saucedemo")
        cy.get('[data-test="username"]').type('standard_user').should('be.visible')
        cy.get('[data-test="password"]').type('bonjour').should('be.visible')
        cy.get('[data-test="login-button"]').click() 
        cy.contains('Epic sadface: Username and password do not match any user in this service');

    })


    it('username invalide',() => {

        cy.visit('https://www.saucedemo.com/')
        cy.url().should("include","saucedemo")
        cy.get('[data-test="username"]').type('batman').should('be.visible')
        cy.get('[data-test="password"]').type('secret_sauce').should('be.visible')
        cy.get('[data-test="login-button"]').click() 
        cy.contains('Epic sadface: Username and password do not match any user in this service');

    })


    it('user bloqué apprès 3 tentatives daccès',() => {

        cy.visit('https://www.saucedemo.com/')
        cy.url().should("include","saucedemo")
        cy.get('[data-test="username"]').type('locked_out_user').should('be.visible')
        cy.get('[data-test="password"]').type('secret_sauce').should('be.visible')
        cy.get('[data-test="login-button"]').click() 
        cy.contains('Epic sadface: Sorry, this user has been locked out.')

    })



})