const xSize = 1000;
const ySize = 1000;

export const setLightsArray = (): string[][] => {
    const deepArray = new Array<string>(xSize).fill('.');
    const lightArray = new Array<string[]>(ySize).fill(deepArray);


    return lightArray;
}
