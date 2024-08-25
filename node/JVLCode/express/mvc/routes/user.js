const express = require('express');
const {loginPage, dashBoardPage, loginProcess} = require('../controllers/userController');

const router = express.Router();

router.get('/', loginPage);
router.get('/dashBoard', dashBoardPage);
router.post('/login', loginProcess);

module.exports = router;