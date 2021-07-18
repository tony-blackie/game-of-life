import { useState, useEffect } from 'react';

import { createField, willRemainAlive } from './utils';
import { Cell } from '../types';

interface Input {
    width: number;
    height: number;
}
interface Output {
    cells: Cell[][];
}

const TIME_INTERVAL = 600 as const;

const useField = ({ width, height }: Input): Output => {
    const [cells, setCells] = useState<Cell[][]>(createField(width, height));

    const calculateNextIteration = (cells: Cell[][]) => {
        const newCells = cells.map((row) => {
            return row.map((cell) => ({
                ...cell,
                isAlive: willRemainAlive(cell.x, cell.y, cells),
            }));
        });

        setCells(newCells);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            calculateNextIteration(cells);
        }, TIME_INTERVAL);

        return () => {
            clearInterval(interval);
        };
    }, [cells, calculateNextIteration]);

    return {
        cells,
    };
};

export default useField;
