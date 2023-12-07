const xSize = 1000;
const ySize = 1000;

export interface coordinatesInterface {
    x: number,
    y:number
}

export interface result {
    lightArray: string[][],
    nbOfLightOn: number
}

export const setLightsArray = (start?: coordinatesInterface, end?: coordinatesInterface, type?:string): result => {
    const deepArray = new Array<string>(xSize).fill('.');
    const lightArray = new Array<string[]>(ySize).fill(deepArray);
    let nbOfLightOn = 0;
    let resArray: string[][] = structuredClone(lightArray);

    if (start && end) {        
        lightArray.forEach((arr, i, ) => {
            if (i  >= start.x && i <= end.x) {              
                resArray[i] = arr.fill('X', start.y, end.y+1);
                nbOfLightOn += (end.y+1) - start.y; 
            }
        })
    }

    const res: result = {
        lightArray: resArray,
        nbOfLightOn: nbOfLightOn
    }
    return res;
}
