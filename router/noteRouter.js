import express from 'express';

import NoteController from '../models/noteQueries';
import NoteValidation from '../middlewares/noteValidation';

const noteRouter = express.Router();

noteRouter.post('/note', NoteValidation.createNoteValidation, NoteController.createNote);
noteRouter.get('/note', NoteController.getNote);
noteRouter.delete('/note/:id', NoteValidation.deleteNote, NoteController.deleteNote);
noteRouter.patch('/note/:id', NoteValidation.editNoteValidation, NoteController.editNote);

export default noteRouter;
