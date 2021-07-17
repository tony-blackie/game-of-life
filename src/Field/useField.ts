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

interface Field {
    cells: Cell[][];
}

const INTERVAL_TIME = 400 as const;

const useField = ({ width, height }: Input): Output => {
    const [field, setField] = useState<Field>({
        cells: createField(width, height),
    });

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
