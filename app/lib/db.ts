import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    database: process.env.PGSQL_DATABASE,
  });
}

export default conn ;