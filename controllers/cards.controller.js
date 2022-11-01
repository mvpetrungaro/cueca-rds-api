import serv from "../services/cards.service.js";

async function getCards(_req, res, next) {
  try {
    const cards = await serv.getCards();
    res.send(cards);
  } catch (err) {
    next(err);
  }
}

export default {
  getCards,
};
