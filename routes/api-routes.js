const express = require('express');

const { generateScreenshot } = require("../controllers/api-controller");

const router = express();

router.post('/generate-ss', generateScreenshot);

module.exports = router;