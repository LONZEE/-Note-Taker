const router = require('express').Router();   // Express router
const { v4: uuidv4 } = require('uuid');  // UUID package
const fs = require('fs');   // File system package

router.get('/api/notes', (req, res) => {  // GET request
    const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8')); // Read db.json file
    res.json(db);  // Send response
}); 

const readDbJson = () => { // Read db.json file
    const data = fs.readFileSync("db/db.json", "utf8"); // Read db.json file
    return JSON.parse(data); // Parse data
  };
  
  const writeDbJson = (data) => { // Write to db.json file
    const jsonData = JSON.stringify(data); // Stringify data
    fs.writeFileSync("db/db.json", jsonData); // Write to db.json file
  };
  
  router.post('/api/notes', (req, res) => { // POST request
    const dbJson = readDbJson();  // Read db.json file
    const newFeedback = { // New feedback object
      title: req.body.title,  
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newFeedback); // Push new feedback to db.json
    writeDbJson(dbJson); // Write to db.json file
    res.json(dbJson);
  });

  router.delete('/api/notes/:id', (req, res) => { // DELETE request
    const dataJSON = readDbJson();
    const newNotes = dataJSON.filter(note => note.id !== req.params.id);
    writeDbJson(newNotes);
    res.json("Note deleted!");
  });

module.exports = router;