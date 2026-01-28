const express = require('express');
const router = express.Router();
const researchService = require('../services/researchService');

// POST /research/run
router.post('/run', (req, res) => {
    // Expecting the full company profile object from enrichment
    const companyProfile = req.body;

    if (!companyProfile || !companyProfile.company_name) {
        return res.status(400).json({ error: "Missing company profile data" });
    }

    const result = researchService.runResearch(companyProfile);
    res.json(result);
});

module.exports = router;
