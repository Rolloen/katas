

const MAX_INT = 1000;

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
    let errMsg = [];
    for (const str of finalSplitedString) {
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
    if(errMsg && errMsg.length > 0) {
        throw new Error('negatives not allowed : ' + errMsg);
    }
    return sumValue;
}
