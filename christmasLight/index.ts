import { setLightsArray } from "./christmasLight";

const main = () : void => {
    const array = setLightsArray();
    array.forEach((nestedArray ) => {
        nestedArray.forEach((char) => {
            process.stdout.write(char)
        })
    })
}

main();