const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(db);
});

const readDbJson = () => {
    const data = fs.readFileSync("db/db.json", "utf8");
    return JSON.parse(data);
  };
  
  const writeDbJson = (data) => {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync("db/db.json", jsonData);
  };
  
  router.post('/api/notes', (req, res) => {
    const dbJson = readDbJson();
    const newFeedback = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newFeedback);
    writeDbJson(dbJson);
    res.json(dbJson);
  });

  router.delete('/api/notes/:id', (req, res) => {
    const dataJSON = readDbJson();
    const newNotes = dataJSON.filter(note => note.id !== req.params.id);
    writeDbJson(newNotes);
    res.json("Note deleted.");
  });

module.exports = router;