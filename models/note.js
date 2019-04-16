'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    note_id: DataTypes.INTEGER,
    time: DataTypes.DATE
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User);
  };
  return Note;
};