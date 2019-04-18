import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import devLogger from './utils/devLogger';
import noteRouter from './router/noteRouter';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', noteRouter);

const PORT = process.env.PORT || 3000;

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Incorrect URL'
  });
});

app.listen(PORT, () => {
  devLogger(`Note+ started on port ${PORT}`);
});
