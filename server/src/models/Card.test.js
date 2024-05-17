const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const {db} = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'mojo', mojo: 5, stamina: 6 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

   it('has an has the card name mojo', function() {
    expect(card.name).toBe('mojo')
  })
  it('has an has the  mojo of 5', function() {
    expect(card.mojo).toBe(5)
  })  
  it('has an has the card stamina of 6', function() {
    expect(card.stamina).toBe(6)
  })

})
