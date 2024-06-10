const Astrologer = require('../models/astrologer');

class DistributionService {
    constructor(astrologers) {
        this.astrologers = astrologers;
    }

    distributeUser(user) {
        // Sort astrologers by current flow and then by top astrologer status
        this.astrologers.sort((a, b) => {
            if (a.currentFlow === b.currentFlow) {
                return a.isTopAstrologer === b.isTopAstrologer ? 0 : a.isTopAstrologer ? -1 : 1;
            }
            return a.currentFlow - b.currentFlow;
        });

        // Allocate user to the astrologer with the least flow
        let selectedAstrologer = this.astrologers[0];
        selectedAstrologer.currentFlow++;
        return selectedAstrologer;
    }

    toggleTopAstrologer(id, isTop) {
        const astrologer = this.astrologers.find(a => a.id === id);
        if (astrologer) {
            astrologer.isTopAstrologer = isTop;
        }
    }

    getAstrologers() {
        return this.astrologers;
    }
}

module.exports = DistributionService;
