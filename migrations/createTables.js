import db from '../models/db_store/db';
import devLogger from '../utils/devLogger';

const SQL_COMMANDS = `CREATE TABLE IF NOT EXISTS note(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  note TEXT NOT NULL,
  date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const createTables = (logger) => {
  db.query(SQL_COMMANDS)
    .then(results => logger(results))
    .catch(error => devLogger(error));
};

createTables(devLogger);

db.end();
