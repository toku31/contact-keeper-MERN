const express = require('express')
const router = express.Router();

// @route    GET api/auth
// @desc     Get looged in user
// @access   Private
router.get('/', (req, res) => {   // ここの'/'は'api/auth'
  res.send('Get looged in user')
});

// @route    POST api/auth
// @desc     Auth user & get token
// @access   Public
router.post('/', (req, res) => {   // ここの'/'は'api/auth'
  res.send('Log in user')
});

module.exports = router;