import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
  user: "root",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "clean_arch_db",
});

export default db;
