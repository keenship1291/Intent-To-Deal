// services/intentService.js

// Mock Service for Intent Capture
// Logic:
// - Determine company from IP (static map)
// - Calculate intent score based on visited page

const processVisit = (ip, page, timestamp) => {
    // 1. Mock IP Resolution
    // In a real app, this calls Clearbit/6sense
    let companyName = "Unknown Visitor";
    if (ip === "127.0.0.1" || ip.startsWith("192.")) {
        companyName = "Acme Corp"; // Default demo company
    } else if (ip === "8.8.8.8") {
        companyName = "Google";
    }

    // 2. Mock Intent Scoring
    // Logic: High intent if visiting pricing or contact page
    let intentScore = 10; // Base score
    const highIntentPages = ["pricing", "contact", "demo"];

    // Simple check if page url contains high intent keywords
    const isHighIntent = highIntentPages.some(keyword => page.toLowerCase().includes(keyword));

    if (isHighIntent) {
        intentScore = 85;
    } else {
        intentScore = 30;
    }

    // Return structured data
    return {
        company_name: companyName,
        intent_score: intentScore,
        visit_details: {
            ip,
            page,
            timestamp
        }
    };
};

module.exports = {
    processVisit
};
