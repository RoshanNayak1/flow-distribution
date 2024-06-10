const DistributionService = require('../services/distributionService');
const Astrologer = require('../models/astrologer');
const User = require('../models/user');

const astrologers = [
    new Astrologer(1, 'Astrologer 1'),
    new Astrologer(2, 'Astrologer 2'),
    new Astrologer(3, 'Astrologer 3', true)
];

const distributionService = new DistributionService(astrologers);

exports.allocateUser = (req, res) => {
    const { id, name } = req.body;
    const user = new User(id, name);
    const astrologer = distributionService.distributeUser(user);
    res.json(astrologer);
};

exports.toggleTopAstrologer = (req, res) => {
    const { id, isTop } = req.body;
    distributionService.toggleTopAstrologer(id, isTop);
    res.sendStatus(200);
};

exports.getAstrologers = (req, res) => {
    res.json(distributionService.getAstrologers());
};
