const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(db);
}   );