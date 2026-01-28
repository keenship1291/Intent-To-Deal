const express = require('express');
const router = express.Router();
const intentService = require('../services/intentService');

// POST /intent/visit
router.post('/visit', (req, res) => {
    const { ip, page, timestamp } = req.body;

    // Validate Input
    if (!ip || !page) {
        return res.status(400).json({ error: "Missing 'ip' or 'page' in request body" });
    }

    const result = intentService.processVisit(ip, page, timestamp || new Date().toISOString());
    res.json(result);
});

module.exports = router;
