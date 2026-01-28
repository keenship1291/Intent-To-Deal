const express = require('express');
const router = express.Router();
const enrichmentService = require('../services/enrichmentService');

// POST /enrichment/company
router.post('/company', (req, res) => {
    const { company_name } = req.body;

    if (!company_name) {
        return res.status(400).json({ error: "Missing 'company_name' in request body" });
    }

    const result = enrichmentService.enrichCompany(company_name);
    res.json(result);
});

module.exports = router;
