module.exports = function toReadable(number) {
    const unitsArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensArr = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundredArr = ['hundred'];

    const hundred = Math.floor(number / 100);
    const tens = Math.floor(number - hundred * 100);
    const decade = Math.floor((number - hundred * 100) / 10);
    const unitsTeen = number % 100;
    const units = Math.floor(number % 10);

    let phrase = [];

    if (!number || number === 0) return "zero";
    if (number >= 100 && number < 1000) {
        phrase.push(unitsArr[hundred]);
        phrase.push(hundredArr[0]);
    }
    if (tens < 20) {
        phrase.push(unitsArr[unitsTeen]);
    } else if (units === 0) {
        phrase.push(tensArr[decade]);
    } else if (tens > 20) {
        phrase.push(tensArr[decade]);
        phrase.push(unitsArr[units]);
    }
    phrase = phrase.filter(String).join(" ").toString();
    return phrase;
}