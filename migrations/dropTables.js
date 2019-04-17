import db from '../models/db_store/db';
import devLogger from '../utils/devLogger';

const SQL_COMMANDS = 'DROP TABLE IF EXISTS note;';

const dropTables = (logger) => {
  db.query(SQL_COMMANDS)
    .then(results => logger(results))
    .catch(error => logger(error));
};

dropTables(devLogger);

db.end();
