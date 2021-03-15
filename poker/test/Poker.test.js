const assert = require('assert')
const Poker = require('../Poker').Poker

describe('Poker', function() {
    let poker;

    afterEach(function() {
        poker = null;
    });


    it('isStraight []', function() {
        poker = new Poker();
        const isStraight = poker.validate([])
        assert.equal(isStraight, false)
    });

    it('isStraight [2, 3, 4, 5, 6]', function() {
        poker = new Poker();
        const isStraight = poker.validate([2, 3, 4, 5, 6])
        assert.equal(isStraight, true, "2,3,4,5,6")
    });

    it('isStraight [14, 5, 4 ,2, 3]', function() {
        poker = new Poker();
        const isStraight = poker.validate([14, 5, 4 ,2, 3])
        assert.equal(isStraight, true, "14, 5, 4 ,2, 3")
    });

    it('isStraight [7, 7, 12 ,11, 3, 4, 14]', function() {
        poker = new Poker();
        const isStraight = poker.validate([7, 7, 12 ,11, 3, 4, 14])
        assert.equal(isStraight, false, "7, 7, 12 ,11, 3, 4, 14")
    });

    it('isStraight [7, 3, 2]', function() {
        poker = new Poker();
        const isStraight = poker.validate([7, 3, 2])
        assert.equal(isStraight, false, "7, 3, 2")
    });
});

