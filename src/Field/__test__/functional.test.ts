import { willRemainAlive } from '../utils';
import { Cell } from '../../types';

describe('willRemainAlive', () => {
    it('should provide correct transformation of field after one tick', () => {
        // prettier-ignore
        const field = getFieldFromSchema(
            [
                ['-', 'X', '-', '-', '-'],
                ['-', '-', 'X', '-', '-'],
                ['X', 'X', 'X', '-', '-'],
                ['-', '-', '-', '-', '-'],
                ['-', '-', '-', '-', '-'],
            ],
            5,
            5
        );

        const modifiedField = applyMultipleTicks(field, 1);

        const result = getSchemaFromField(modifiedField);

        expect(result).toEqual([
            ['-', '-', '-', '-', '-'],
            ['X', '-', 'X', '-', '-'],
            ['-', 'X', 'X', '-', '-'],
            ['-', 'X', '-', '-', '-'],
            ['-', '-', '-', '-', '-'],
        ]);
    });

    it('should provide correct transformation of field after two ticks', () => {
        // prettier-ignore
        const field = getFieldFromSchema(
            [
                ['-', 'X', '-', '-', '-'],
                ['-', '-', 'X', '-', '-'],
                ['X', 'X', 'X', '-', '-'],
                ['-', '-', '-', '-', '-'],
                ['-', '-', '-', '-', '-'],
            ],
            5,
            5
        );

        const modifiedField = applyMultipleTicks(field, 2);

        const result = getSchemaFromField(modifiedField);

        expect(result).toEqual([
            ['-', '-', '-', '-', '-'],
            ['-', '-', 'X', '-', '-'],
            ['X', '-', 'X', '-', '-'],
            ['-', 'X', 'X', '-', '-'],
            ['-', '-', '-', '-', '-'],
        ]);
    });

    it('should provide correct transformation of field after three ticks', () => {
        // prettier-ignore
        const field = getFieldFromSchema(
            [
                ['-', 'X', '-', '-', '-'],
                ['-', '-', 'X', '-', '-'],
                ['X', 'X', 'X', '-', '-'],
                ['-', '-', '-', '-', '-'],
                ['-', '-', '-', '-', '-'],
            ],
            5,
            5
        );

        const modifiedField = applyMultipleTicks(field, 3);

        const result = getSchemaFromField(modifiedField);

        expect(result).toEqual([
            ['-', '-', '-', '-', '-'],
            ['-', 'X', '-', '-', '-'],
            ['-', '-', 'X', 'X', '-'],
            ['-', 'X', 'X', '-', '-'],
            ['-', '-', '-', '-', '-'],
        ]);
    });
});

export const getFieldFromSchema = (
    schema: Array<Array<'X' | '-'>>,
    width: number,
    height: number
): Cell[][] => {
    const cells: undefined[][] = new Array(height).fill(new Array(width).fill(undefined));

    return cells.map((row, y) => {
        return row.map((_, x) => ({
            isAlive: schema[y][x] === 'X',
            x,
            y,
        }));
    });
};

const getSchemaFromField = (cells: Cell[][]): Array<Array<'X' | '-'>> => {
    return cells.map((row) => {
        return row.map((item) => (item.isAlive ? 'X' : '-'));
    });
};

const calculateNext = (cells: Cell[][]): Cell[][] => {
    return cells.map((row) => {
        return row.map((cell) => ({
            ...cell,
            isAlive: willRemainAlive(cell.x, cell.y, cells),
        }));
    });
};

const applyMultipleTicks = (field: Cell[][], ticks: number): Cell[][] => {
    let result = field;

    for (let i = 0; i < ticks; i++) {
        result = calculateNext(result);
    }

    return result;
};
