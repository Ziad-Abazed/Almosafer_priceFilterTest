/// <reference types= "cypress" />


Cypress.Commands.add("searchPart", (arrCity) => {
  let indexofarrCity = Math.floor(Math.random() * arrCity.length)
  cy.get('[data-testid="AutoCompleteInput"]').type(arrCity[indexofarrCity])
  cy.get('[data-testid="AutoCompleteResultItem0"]').click()
  cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
});

describe('PRICE filter', () => {
  it('chek the LOWEST PRICE filter', () => {
    cy.visit("https://www.almosafer.com/en")
    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click()
    cy.searchPart(["dubai", "jeddah", "amman"])

    cy.wait(25000)


      cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click()
      cy.wait(3000)

      cy.get('[data-testid="HotelSearchResult__Hotel0__PriceLabel"] > .Price__Value').then(($firstPrice) => {
        const firstPrice = parseFloat($firstPrice.text());

        cy.get('[data-testid="HotelSearchResult__Hotel39__PriceLabel"] > .Price__Value').then(($lastPrice) => {
          const lastPrice = parseFloat($lastPrice.text());
          cy.wrap(lastPrice).should('be.gt', firstPrice);
        });

      });



  



  })




})








