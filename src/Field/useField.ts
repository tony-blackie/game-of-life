import { useState } from 'react';

import { createField, willRemainAlive } from './utils';
import { useInterval } from '../hooks';
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

    const calculateNextIteration = () => {
        setCells((prevСells: Cell[][]) => {
            const newCells = prevСells.map((row) => {
                return row.map((cell) => ({
                    ...cell,
                    isAlive: willRemainAlive(cell.x, cell.y, cells),
                }));
            });

            return newCells;
        });
    };

    useInterval(() => {
        calculateNextIteration();
    }, TIME_INTERVAL);

    return {
        cells,
    };
};

export default useField;
