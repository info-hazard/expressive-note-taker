const router = require('express').Router();
let { notesArray } = require('../../db/db.json');
const { createNewNote } = require('../../public/assets/js/notes');

router.post('/notes', (req, res) => {
  if(notesArray){
  req.body.id = notesArray.length.toString();
  } else 
  {req.body.id = 0}
  res.json(createNewNote(req.body, notesArray));
});

module.exports = router;