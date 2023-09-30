export default function Add (numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = '';
    let hasCustomDelimiter = numbers[0] === '/';
    let finalSplitedString = [];
    if (hasCustomDelimiter) {
        let firstSplitedString = numbers.split('\n');
        let firstIndex = firstSplitedString[0];
    
        if (isNaN(parseInt(firstIndex))) {
            delimiter = firstIndex.substring(2, firstIndex.length);
        }
        finalSplitedString = firstSplitedString[1].split(delimiter);
    } else {
        finalSplitedString = numbers.split(/[\n,]/);
    }

    let sumValue = 0;
    for (const str of finalSplitedString) {
        if (parseInt(str) < 0) {
            throw new Error('negatives not allowed : ' + str);
        }
        sumValue += parseInt(str)
    }
    return sumValue;
}
