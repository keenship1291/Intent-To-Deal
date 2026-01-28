const express = require('express');
const router = express.Router();
const deckService = require('../services/deckService');

// POST /deck/generate
router.post('/generate', (req, res) => {
    // Expecting research data
    const researchData = req.body;

    if (!researchData || !researchData.company_name || !researchData.findings) {
        return res.status(400).json({ error: "Missing research data (findings required)" });
    }

    const result = deckService.generateDeck(researchData);
    res.json(result);
});

module.exports = router;
