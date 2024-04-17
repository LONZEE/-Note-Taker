const router = require('express').Router();
const path = require('path');

const sendFile = (res, file) => {
  res.sendFile(path.join(__dirname, `../public/${file}`));
};

router.get('/', (req, res) => {
  sendFile(res, 'index.html');
});

router.get('/notes', (req, res) => {
  sendFile(res, 'notes.html');
});

module.exports = router;