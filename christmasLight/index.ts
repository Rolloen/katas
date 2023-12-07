import { setLightsArray } from "./christmasLight";

const main = () : void => {
    
    const {lightArray} = setLightsArray();
    lightArray.forEach((nestedArray ) => {
        nestedArray.forEach((char) => {
            // process.stdout.write(char);
        })
        // process.stdout.write("\n");
    })
}

main();