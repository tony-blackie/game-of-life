import { Cell } from '../types';

export const getRandomBool = (): boolean => {
    return Math.random() < 0.5;
};

export const createField = (width: number, height: number) => {
    const cells: undefined[][] = new Array(height).fill(new Array(width).fill(undefined));

    return cells.map((row, y) => {
        return row.map((_, x) => ({
            isAlive: getRandomBool(),
            x,
            y,
        }));
    });
};

export const countNeighbours = (x: number, y: number, cells: Cell[][]): number => {
    const possibleNeighbourCoords = [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1],
    ];

    const aliveNeighboursCount = possibleNeighbourCoords
        .map(([x, y]) => {
            if (!cells[y]) {
                return undefined;
            }

            return cells[y][x]?.isAlive;
        })
        .filter((item) => !!item).length;

    return aliveNeighboursCount;
};

export const checkIfLivesOn = (aliveNeighbours: number, isCellAlive: boolean): boolean => {
    return isCellAlive ? [2, 3].includes(aliveNeighbours) : aliveNeighbours === 3;
};

export const willRemainAlive = (x: number, y: number, cells: Cell[][]): boolean => {
    const aliveNeighboursCount = countNeighbours(x, y, cells);

    const isCellAlive = cells[y][x].isAlive;

    return checkIfLivesOn(aliveNeighboursCount, isCellAlive);
};

export const getKey = (item: { x: number; y: number } | undefined) => {
    return `${item?.y} ${item?.x}`;
};
