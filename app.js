const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const intentRoutes = require('./routes/intent');
const enrichmentRoutes = require('./routes/enrichment');
const researchRoutes = require('./routes/research');
const deckRoutes = require('./routes/deck');
const outboundRoutes = require('./routes/outbound');

// Mount Routes
app.use('/intent', intentRoutes);
app.use('/enrichment', enrichmentRoutes);
app.use('/research', researchRoutes);
app.use('/deck', deckRoutes);
app.use('/outbound', outboundRoutes);

// Root Health Check
app.get('/', (req, res) => {
    res.json({
        msg: "Intent-to-Deal Engine Backend is Running",
        endpoints: [
            "POST /intent/visit",
            "POST /enrichment/company",
            "POST /research/run",
            "POST /deck/generate",
            "POST /outbound/send"
        ]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
