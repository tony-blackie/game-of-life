export const createField = (width: number, height: number) => {
    const cells: undefined[][] = new Array(height).fill(new Array(width).fill(undefined));

    const result = cells.map((row, y) => {
        return row.map((_, x) => ({
            isAlive: false,
            x,
            y,
        }));
    });

    // TODO: Remove testing code

    // result[5][4] = {
    //     ...result[5][4],
    //     isAlive: true,
    // };

    // result[5][5] = {
    //     ...result[5][5],
    //     isAlive: true,
    // };

    // result[5][6] = {
    //     ...result[5][6],
    //     isAlive: true,
    // };

    return result;
};
