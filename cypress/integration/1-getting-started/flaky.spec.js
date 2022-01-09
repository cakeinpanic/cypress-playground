/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

describe('flaky describe', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('flaky test failing in 66% of cases', () => {
    const max = 4
    const min = 2
    const lengthToCompare =  Math.floor(Math.random() * (max - min + 1)) + min;
    cy.get('.todo-list li').should('have.length', lengthToCompare)
  })


})
