//Library
class Poker {
    validate(cards) {
        const count = cards.length
        if (!count || count > 7) {
            return false
        }

        for (let i = 0; i < cards.length; i++) {
            if (cards[i] < 2 || cards[i] > 14) {
                return false;
            }
        }

        return this.isStraight(cards)
    }

    isStraight(cards) {
        const cardsSorted = cards.sort((a, b) => a - b)
        let sequence = []

        for (let i = 0; i < cardsSorted.length; i++) {
            const card = cardsSorted[i]
            if (cardsSorted.includes(card + 1) !== false || cardsSorted.includes(card - 1) !== false) {
                if (!sequence[i - 1] && sequence[i - 1] !== card - 1) {
                    sequence = []
                }
                sequence.push(card)
            }

            if (card === 14 && Math.min(...sequence) === 2 && Math.max(...sequence) < 13) {
                sequence[i] = 14
            }
        }
        return sequence.length === 5
    }
}

module.exports.Poker = Poker