module.exports = function toReadable (number) {
    const smallNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const midNumber = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['hundred'];

    if (number < 10) {
        return smallNumber[number]
    };

    if (number > 10 && number < 20) {
        return midNumber[number - 11]
    };
    if (number >= 10 && number < 100) {
        const ten = Math.floor(number / 10);
        const last = number % 10;
        return last === 0 ? tens[ten - 1] : `${tens[ten - 1]} ${smallNumber[last]}`;
    }
    if (number >= 100 && number < 1000) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        if (remainder === 0) {
            return `${smallNumber[hundred]} ${hundreds[0]}`
        };
        return `${smallNumber[hundred]} ${hundreds[0]} ${toReadable(remainder)}`;
    }
}
