// services/enrichmentService.js

// Mock Service for Company Enrichment
// Logic:
// - Take company name
// - Return static details (Industry, Size, Decision Maker)

const enrichCompany = (companyName) => {
    // Mock Database of Companies
    const mockDB = {
        "Acme Corp": {
            industry: "SaaS / Productivity",
            company_size: "100-500 employees",
            decision_maker: {
                name: "Wile E. Coyote",
                role: "Chief Allocations Officer",
                email: "wile@acmecorp.demo"
            }
        },
        "Google": {
            industry: "Technology",
            company_size: "100,000+ employees",
            decision_maker: {
                name: "Sundar Pichai",
                role: "CEO",
                email: "sundar@google.demo"
            }
        }
    };

    // Default fallback if company not found in mock DB
    const defaultEnrichment = {
        industry: "General Business",
        company_size: "Unknown",
        decision_maker: {
            name: "John Doe",
            role: "Head of Operations",
            email: "john@example.demo"
        }
    };

    const data = mockDB[companyName] || defaultEnrichment;

    return {
        company_name: companyName,
        ...data
    };
};

module.exports = {
    enrichCompany
};
