const { expect } = require('chai');
const Astrologer = require('../models/astrologer');
const DistributionService = require('../services/distributionService');

describe('DistributionService', () => {
    let astrologers;
    let distributionService;

    beforeEach(() => {
        astrologers = [
            new Astrologer(1, 'Astrologer 1'),
            new Astrologer(2, 'Astrologer 2'),
            new Astrologer(3, 'Astrologer 3', true)
        ];
        distributionService = new DistributionService(astrologers);
    });

    it('should distribute users fairly', () => {
        const user = { id: 1, name: 'User 1' };
        const astrologer = distributionService.distributeUser(user);
        expect(astrologer.id).to.equal(1);
    });

    it('should toggle top astrologer status', () => {
        distributionService.toggleTopAstrologer(2, true);
        expect(astrologers[1].isTopAstrologer).to.be.true;
    });
});
