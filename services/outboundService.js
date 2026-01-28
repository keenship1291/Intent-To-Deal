// services/outboundService.js

// Mock Service for Email Enagement
// Logic:
// - Mock sending an email with the deck

const sendEmail = (deck, contact) => {
    // Input: Deck object and Contact object

    // Simulate API Latency
    // In real world, this calls SendGrid/Gmail API

    const success = true; // Always succeed for demo

    if (!contact || !contact.email) {
        return {
            status: "failed",
            error: "Missing contact email"
        };
    }

    return {
        status: "sent",
        timestamp: new Date().toISOString(),
        recipient: contact.email,
        subject: `Start Growing with Us - Deck for ${deck.company_name}`,
        deck_link: `https://mock-deck-provider.com/view/${deck.deck_id}`,
        message_id: "msg_" + Math.random().toString(36).substr(2, 9)
    };
};

module.exports = {
    sendEmail
};
