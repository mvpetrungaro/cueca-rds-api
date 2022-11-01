// import { ObjectId } from "mongodb";
import { getClient } from "../db/db.js";

async function getCards() {
  const client = getClient();

  try {
    await client.connect();

    return await client.db("cueca-rds").collection("cards").find().toArray();
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default {
  getCards,
};
