// input-currency
describe('Foreign Exchange Currency App Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it should empty first time', () => {
    // FIRST EMPTY
    cy.get('[data-testid=empty-currency]').should('exist')
    cy.get('[data-testid=currency-data]').should('not.exist')
  })

  it('it should allow user add currency', () => {
    // ADD
    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .select('CAD')
      .should('have.value', 'CAD')
    cy.get('[data-testid=button-submit-currency]').click()
    cy.get('[data-testid=loading-currency]').should('exist')
    cy.wait(1000)
    cy.get('[data-testid=currency-data]').contains('CAD')

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .select('CHF')
      .should('have.value', 'CHF')
    cy.get('[data-testid=button-submit-currency]').click()
    cy.get('[data-testid=loading-currency]').should('exist')
    cy.wait(1000)
    cy.get('[data-testid=currency-data]').contains('CHF')

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .select('GBP')
      .should('have.value', 'GBP')
    cy.get('[data-testid=button-submit-currency]').click()
    cy.get('[data-testid=loading-currency]').should('exist')
    cy.wait(1000)
    cy.get('[data-testid=currency-data]').contains('GBP')

    cy.get('[data-testid=currency-data]').should('have.length', 3)
  })

  it('it should allow user delete currency', () => {
    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .select('CAD')
      .should('have.value', 'CAD')
    cy.get('[data-testid=button-submit-currency]').click()
    cy.get('[data-testid=loading-currency]').should('exist')
    cy.wait(1000)
    cy.get('[data-testid=currency-data]').contains('CAD')

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .select('CHF')
      .should('have.value', 'CHF')
    cy.get('[data-testid=button-submit-currency]').click()
    cy.get('[data-testid=loading-currency]').should('exist')
    cy.wait(1000)
    cy.get('[data-testid=currency-data]').contains('CHF')

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .select('GBP')
      .should('have.value', 'GBP')
    cy.get('[data-testid=button-submit-currency]').click()
    cy.get('[data-testid=loading-currency]').should('exist')
    cy.wait(1000)
    cy.get('[data-testid=currency-data]').contains('GBP')

    // DELETE
    cy.get('[data-testid=button-delete-CAD]').click()
    cy.get('[data-testid=button-delete-CHF]').click()
    cy.get('[data-testid=button-delete-GBP]').click()
    cy.get('[data-testid=empty-currency]').should('exist')
    cy.get('[data-testid=currency-data]').should('not.exist')
  })

  it('it should disallow user add more currency if all selected', () => {
    // CAN'T ADD MORE CURRENCIES IF ALL SELECTED
    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('CAD')
      .should('have.value', 'CAD')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('CHF')
      .should('have.value', 'CHF')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('GBP')
      .should('have.value', 'GBP')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('IDR')
      .should('have.value', 'IDR')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('INR')
      .should('have.value', 'INR')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('JPY')
      .should('have.value', 'JPY')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('KRW')
      .should('have.value', 'KRW')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('MYR')
      .should('have.value', 'MYR')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('SGD')
      .should('have.value', 'SGD')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('USD')
      .should('have.value', 'USD')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=all-currencies-selected]').should('exist')
    cy.get('[data-testid=select-currency]').should('not.exist')
  })

  it('it should allow user input their money', () => {
    // DELETE
    cy.get('[data-testid=input-money]').clear().type(1000)
    cy.get('[data-testid=input-money]').should('have.value', '1000')
  })

  it('it show correct total rates multiple by money', () => {
    // DELETE
    cy.get('[data-testid=button-add-more-currency]').click()
    cy.get('[data-testid=select-currency]')
      .get('select')
      .select('CAD')
      .should('have.value', 'CAD')
    cy.get('[data-testid=button-submit-currency]').click()

    cy.get('[data-testid=rate-CAD]')
      .invoke('text')
      .then(text => {
        cy.get('[data-testid=input-money]').clear().type(1000)
        cy.get('[data-testid=total-converter]').contains(
          parseFloat(1000 * text),
        )
      })
  })
})
