

const MAX_INT = 1000;

export default function Add (numbers) {
    if (numbers === "") {
        return 0;
    }
    
    let hasCustomDelimiter = numbers[0] === '/';
    let finalSplitedString = [];
    if (hasCustomDelimiter) {
        finalSplitedString = getNumbersWithCustomDelimiter(numbers)
    } else {
        finalSplitedString = numbers.split(/[\n,]/);
    }

    let sumValue = 0;
    try {
        sumValue = sumOfNumber(finalSplitedString);
    } catch (error) {
        throw error;
    }
    return sumValue;
}

function getNumbersWithCustomDelimiter(numbersString) {
    let delimiter = '';
    let firstSplitedString = numbersString.split('\n');
    let firstIndex = firstSplitedString[0];

    if (isNaN(parseInt(firstIndex))) {
        let delimiterStart = firstIndex[2] === '[' ? 3 : 2;
        let delimiterEnd = firstIndex.indexOf(']') > 0 ? firstIndex.indexOf(']') : firstIndex.length;
        delimiter = firstIndex.substring(delimiterStart, delimiterEnd);
    }
    return firstSplitedString[1].split(delimiter);
}

function sumOfNumber(numberArray) {
    let errMsg = [];
    let sumValue = 0;
    for (const str of numberArray) {
        let parsedInt = parseInt(str);
        if (parsedInt < 0) {
            errMsg.push(str);
            continue;
        } else if (parsedInt > MAX_INT) {
            continue
        } else {
            sumValue += parsedInt;
        }
    }
    if (errMsg && errMsg.length > 0) {
        throw new Error('negatives not allowed : ' + errMsg);
    }
    return sumValue;
}
