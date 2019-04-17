import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import debug from 'debug';
import bodyParser from 'body-parser';

import noteRouter from './routers/noteRouter';

config();
const devLogger = debug('ENTRY FILE');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(noteRouter);

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Incorrect url'
  });
});

app.listen('3000', () => {
  devLogger('Note+ started on port 3000');
});
