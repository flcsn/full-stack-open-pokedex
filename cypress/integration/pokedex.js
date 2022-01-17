describe('Pokedex', () => {
  it('front page can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('page of a pokemon can be accessed', () => {
    cy.get('.list-item').eq(1).click()
    cy.contains('chlorophyll')
  })
})