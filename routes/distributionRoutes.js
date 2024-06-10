const express = require('express');
const router = express.Router();
const distributionController = require('../controllers/distributionController');

router.post('/allocate', distributionController.allocateUser);
router.post('/toggle', distributionController.toggleTopAstrologer);
router.get('/astrologers', distributionController.getAstrologers);

router.get('/', (req, res) => {
    res.send('Welcome to the Flow Distribution API');
  });

module.exports = router;
