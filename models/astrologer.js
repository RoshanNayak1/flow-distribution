class Astrologer {
    constructor(id, name, isTopAstrologer = false, currentFlow = 0) {
        this.id = id;
        this.name = name;
        this.isTopAstrologer = isTopAstrologer;
        this.currentFlow = currentFlow;
    }
}

module.exports = Astrologer;
