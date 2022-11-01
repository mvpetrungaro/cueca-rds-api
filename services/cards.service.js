import repo from "../repositories/cards.repository.js";

async function getCards() {
  return await repo.getCards();
}

export default {
  getCards,
};
