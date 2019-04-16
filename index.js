import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import debug from 'debug';

config();
const devLogger = debug('ENTRY FILE');
const app = express();

app.use(morgan('dev'));

app.listen('3000', () => {
  devLogger('Note+ started on port 3000');
});
