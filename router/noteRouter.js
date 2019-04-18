import express from 'express';

import NoteController from '../models/noteQueries';

const noteRouter = express.Router();

noteRouter.post('/note', NoteController.createNote);
noteRouter.get('/note', NoteController.getNote);
noteRouter.delete('/note/:id', NoteController.deleteNote);
noteRouter.patch('/note/:id', NoteController.editNote);

export default noteRouter;
