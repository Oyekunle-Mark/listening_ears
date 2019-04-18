import db from './db_store/db';

class NoteController {
  static createNote(req, res) {
    const { title, note } = req.body;

    const text = 'INSERT INTO note(title, note) VALUES($1, $2) RETURNING *';
    const values = [title, note];

    db.query(text, values)
      .then(results => res.status(201).json({
        status: 201,
        data: results.rows[0]
      }))
      .catch(error => res.status(500).json({
        status: 501,
        error,
      }));
  }

  static getNote(req, res) {
    const values = 'SELECT * FROM note';

    db.query(values)
      .then(results => res.status(200).json({
        status: 200,
        data: results.rows
      }))
      .catch(error => res.status(500).json({
        status: 500,
        error
      }));
  }

  static deleteNote(req, res) {
    const { id } = req.params;

    const text = 'DELETE FROM note where id=$1 RETURNING *';
    const values = [id];

    db.query(text, values)
      .then(results => res.status(200).json({
        status: 200,
        message: `${results.rows[0].title} deleted`
      }))
      .catch(error => res.status(500).json({
        status: 500,
        error
      }));
  }

  static editNote(req, res) {
    const { id } = req.params;
    const { title, note } = req.body;

    const text = 'UPDATE note SET title=$1, note=$2 WHERE id=$3 RETURNING *';
    const values = [title, note, id];

    db.query(text, values)
      .then(results => res.status(202).json({
        status: 202,
        data: results.rows[0]
      }))
      .catch(error => res.status(500).json({
        status: 500,
        error
      }));
  }
}

export default NoteController;
