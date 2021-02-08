const express = require('express');
const { list, select, create, update, erase, change } = require('../controllers/job.js');

const router = express.Router();

router.get('/get/all',  list);

router.get('/get/:id', select);

router.post('/create', create);

router.put('/update', update);

router.delete('/delete/:id', erase);

router.put('/update/status', change);

module.exports = router;