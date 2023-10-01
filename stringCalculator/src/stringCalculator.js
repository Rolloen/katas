

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
    let delimiters = [];
    let firstSplitedString = numbersString.split('\n');
    let firstIndex = firstSplitedString[0];

    if (isNaN(parseInt(firstIndex))) {
        let hasMultipleDelimiter = firstIndex.includes('[');
        let delimiterStart = 2;
        let delimiterEnd = firstIndex.length;
        if (hasMultipleDelimiter) {
            let splitedFirstIndex = firstIndex.split('');
            for (let i = 0; i < splitedFirstIndex.length; i++) {
                const char = splitedFirstIndex[i];
                let found = false;
                switch (char) {
                    case '[':
                        delimiterStart = i +1 ;
                        break;
                    case ']':
                         delimiterEnd = i;
                         found = true;
                         break
                    default:
                        break;
                }
                if (found) {
                    delimiters.push(firstIndex.substring(delimiterStart, delimiterEnd));
                    found = false;
                }
            }
        } else {
            delimiters.push(firstIndex.substring(delimiterStart, delimiterEnd));
        }        
    }
    let regex = ''
    if (delimiters.length > 1 ) {        
        let regexStr = '[';
        for (const delim of delimiters) {
            regexStr += delim;
        }
        regex = new RegExp(regexStr + ']');
    } else {
        regex = delimiters[0];
    }

    return firstSplitedString[1].split(regex);
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
