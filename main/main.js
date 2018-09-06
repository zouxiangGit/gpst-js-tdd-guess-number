// Write your cade below:
function main() {
}

function guess(seq1, seq2) {
    if (seq1 === seq2) {
        return '4A0B';
    }
    let diffCount = 0;
    let eqCount = 0;
    for (let i = 0; i < seq1.length; i++) {
        seq1.charAt(i) === seq2.charAt(i) ? eqCount++ : diffCount++;
    }
    return `${eqCount}A${diffCount}B`;
}

module.exports = {
    main,
    guess
}