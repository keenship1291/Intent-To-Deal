const express = require('express');
const router = express.Router();
const outboundService = require('../services/outboundService');

// POST /outbound/send
router.post('/send', (req, res) => {
    const { deck, contact } = req.body;

    if (!deck || !contact) {
        return res.status(400).json({ error: "Missing 'deck' or 'contact' info" });
    }

    const result = outboundService.sendEmail(deck, contact);

    if (result.status === "failed") {
        return res.status(400).json(result);
    }

    res.json(result);
});

module.exports = router;
