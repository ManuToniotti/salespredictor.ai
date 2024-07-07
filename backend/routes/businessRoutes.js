// backend/routes/businessRoutes.js
const express = require('express');
const { addBusinessIdea, getBusinessDetails, getBusinessMetrics } = require('../controllers/businessController');
const router = express.Router();

router.post('/add', addBusinessIdea);
router.get('/:id', getBusinessDetails);
router.get('/metrics/:id', getBusinessMetrics);  // New endpoint

module.exports = router;