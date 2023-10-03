const MAX_INT = 1000;

export default function Add(numbers) {
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
    let delimiters = [];
    let firstSplitedString = numbersString.split('\n');
    let delimiterStr = firstSplitedString[0];

    if (isNaN(parseInt(delimiterStr))) {
        let hasMultipleDelimiter = delimiterStr.includes('][');
        let delimiterStartIndex = delimiterStr[2] === '[' ? 3 : 2 ;
        let delimiterEndIndex = delimiterStr[delimiterStr.length - 1] === ']' ? delimiterStr.length -1 : delimiterStr.length;
        if (hasMultipleDelimiter) {
            delimiters = findMultipleDelimiters(delimiterStr);
        } else {
            delimiters.push(delimiterStr.substring(delimiterStartIndex, delimiterEndIndex));
        }
    }

    let regex = '';
    if (delimiters.length > 1) {
        let regexStr = '';
        for (const delim of delimiters) {
            regexStr += delimiters[delimiters.length - 1] === delim ? `(?:\\${delim.split('').join('\\')})` : `(?:\\${delim.split('').join('\\')})|`;            
        }
        regex = new RegExp(regexStr,'g');
    } else {
        regex = delimiters[0];
    }
    return firstSplitedString[1].split(regex);
}

function findMultipleDelimiters(delimiterStr) {
    let tmpDelimiters = [];
    let delimiterStart = 0;
    let delimiterEnd = 0;
    let splitedDelimiterStr = delimiterStr.split('');
    for (let i = 0; i < splitedDelimiterStr.length; i++) {
        const char = splitedDelimiterStr[i];
        let found = false;
        switch (char) {
            case '[':
                delimiterStart = i + 1;
                break;
            case ']':
                delimiterEnd = i;
                found = true;
                break
            default:
                break;
        }
        if (found) {
            tmpDelimiters.push(delimiterStr.substring(delimiterStart, delimiterEnd));
            found = false;
        }
    }
    return tmpDelimiters
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