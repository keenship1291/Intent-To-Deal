// services/deckService.js

// Mock Service for Deck Generation
// Logic:
// - Create a list of slides tailored to the findings

const generateDeck = (researchData) => {
    const { company_name, findings } = researchData;

    // Mock Slide Generation
    // Real app would use Gamma or Slide API

    const slides = [
        {
            title: `Executive Summary for ${company_name}`,
            content: "We help you scale efficiently."
        },
        {
            title: "Current Market Challenges",
            content: findings.pain_points[0] // Use first pain point
        },
        {
            title: "The Opportunity",
            content: findings.opportunities[0] // Use first opportunity
        },
        {
            title: "Our Solution",
            content: "An integrated platform to solve these exact challenges."
        },
        {
            title: "Next Steps",
            content: "Let's schedule a demo to walk through the details."
        }
    ];

    return {
        deck_id: "deck_" + Math.random().toString(36).substr(2, 9),
        company_name,
        created_at: new Date().toISOString(),
        slides: slides,
        status: "ready"
    };
};

module.exports = {
    generateDeck
};
