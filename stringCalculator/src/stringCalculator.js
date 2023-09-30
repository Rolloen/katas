export default function Add (numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let delimiter = '';
    let firstSplitedString = numbers.split('\n');
    let firstIndex = firstSplitedString[0];

    if (isNaN(parseInt(firstIndex))) {
        delimiter = firstIndex.substring(2, firstIndex.length);
    }
    let finalSplitedString = [];
    if (delimiter && delimiter.length > 0) {
        finalSplitedString = firstSplitedString[1].split(delimiter);
    } else {
        finalSplitedString = numbers.split(/[\n,]/);

    }

    const initialValue = 0;
    const sumOfElements = finalSplitedString.reduce((currentSum, currentValue) => currentSum + parseInt(currentValue), initialValue);

    return sumOfElements;
}