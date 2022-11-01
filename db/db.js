import { MongoClient } from "mongodb";

export function getClient() {
  return new MongoClient(process.env.DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
