import repo from '../repositories/cards.repository.js'

async function getCards() {
  return await repo.getCards()
}

async function createCard(card) {
  await repo.createCard(card)
}

export default {
  getCards,
  createCard,
}
