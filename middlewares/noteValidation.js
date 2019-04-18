class NoteValidation {
  static createNoteValidation(req, res, next) {
    if (!req.body.title || !req.body.note || /^\s*$/.test(req.body.title) || /^\s*$/.test(req.body.note)) {
      return res.status(400).json({
        status: 400,
        message: 'Please provide a title and note body'
      });
    }

    next();
  }

  static deleteNote(req, res, next) {
    if (!(/^[123456789]+$/.test(req.params.id))) {
      return res.status(400).json({
        status: 400,
        message: 'Request parameter must be an integer'
      });
    }

    next();
  }

  static editNoteValidation(req, res, next) {
    if (!req.body.title || !req.body.note || /^\s*$/.test(req.body.title) || /^\s*$/.test(req.body.note)) {
      return res.status(400).json({
        status: 400,
        message: 'Please provide a title and note body'
      });
    }

    if (!(/^[123456789]+$/.test(req.params.id))) {
      return res.status(400).json({
        status: 400,
        message: 'Request parameter must be an integer'
      });
    }

    next();
  }
}

export default NoteValidation;
