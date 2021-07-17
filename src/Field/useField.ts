import { useState, useEffect, useCallback } from 'react';

import { createField } from './utils';
import { Cell } from '../types';

interface Input {
    width: number;
    height: number;
}
interface Output {
    cells: Cell[][];
}

interface Field {
    cells: Cell[][];
}

const INTERVAL_TIME = 3000 as const;

const useField = ({ width, height }: Input): Output => {
    const [field, setField] = useState<Field>({
        cells: createField(width, height),
    });

    const countNeighbours = (x: number, y: number, cells: Cell[][]): number => {
        const theoreticNeighbourCoords = [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1],
        ];

        const aliveNeighboursCount = theoreticNeighbourCoords
            .map(([x, y]) => {
                if (!cells[y]) {
                    return undefined;
                }

                return cells[y][x]?.isAlive;
            })
            .filter((item) => !!item).length;

        return aliveNeighboursCount;
    };

    const checkIfLivesOn = (aliveNeighbours: number, isCellAlive: boolean): boolean => {
        return isCellAlive ? [2, 3].includes(aliveNeighbours) : aliveNeighbours === 3;
    };

    const willRemainAlive = (x: number, y: number, cells: Cell[][]): boolean => {
        const aliveNeighboursCount = countNeighbours(x, y, cells);

        const isCellAlive = cells[y][x].isAlive;

        return checkIfLivesOn(aliveNeighboursCount, isCellAlive);
    };

    const calculateNextIteration = (cells: Cell[][]) => {
        const newCells = cells.map((row) => {
            return row.map((cell) => ({
                ...cell,
                isAlive: willRemainAlive(cell.x, cell.y, cells),
            }));
        });

        setField({
            cells: newCells,
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            calculateNextIteration(field.cells);
        }, INTERVAL_TIME);

        return () => {
            clearInterval(interval);
        };
    }, [field.cells, calculateNextIteration]);

    return {
        cells: field.cells,
    };
};

export default useField;
