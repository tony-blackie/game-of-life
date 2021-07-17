import { useState } from 'react';

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
    width: number;
    height: number;
}

const createField = (width: number, height: number) => {
    const cells: undefined[][] = new Array(height).fill(new Array(width).fill(undefined));

    return cells.map((row, y) => {
        return row.map((item, x) => ({
            isAlive: false,
            x,
            y,
        }));
    });
};

const useField = ({ width, height }: Input): Output => {
    const [field, setField] = useState<Field>({
        width,
        height,
        cells: createField(width, height),
    });

    console.log('field: ', field);

    return {
        cells: field.cells,
    };
};

export default useField;
