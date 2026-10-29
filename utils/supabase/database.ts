import { Client } from "pg";

export const databaseClient = () => {
  const connectionString = process.env.DB_CONNECTION_STRING;

  if (!connectionString) {
    throw new Error("DB_CONNECTION_STRING is not configured.");
  }

  return new Client({
    connectionString,
    connectionTimeoutMillis: 10_000,
    query_timeout: 15_000,
  });
};
