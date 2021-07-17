import { getRandomBool, createField, countNeighbours, checkIfLivesOn, getKey } from '../utils';

const mockField = [
    [
        { y: 0, x: 0, isAlive: true },
        { y: 0, x: 1, isAlive: true },
        { y: 0, x: 2, isAlive: true },
    ],
    [
        { y: 1, x: 0, isAlive: true },
        { y: 1, x: 1, isAlive: true },
        { y: 1, x: 2, isAlive: true },
    ],
    [
        { y: 2, x: 0, isAlive: true },
        { y: 2, x: 1, isAlive: true },
        { y: 2, x: 2, isAlive: true },
    ],
];

describe('utils', () => {
    describe('createField', () => {
        it('should return double dimension array with correct structure of cells', () => {
            const temp = Math.random;
            Math.random = jest.fn().mockReturnValue(0.4);

            expect(createField(3, 3)).toEqual(mockField);

            Math.random = temp;
        });
    });

    describe('countNeighbours', () => {
        it('should return 3 for cell in the corner if all cells are alive', () => {
            const expected = countNeighbours(0, 0, mockField);

            expect(expected).toEqual(3);
        });

        it('should return 8 for cell in the corner', () => {
            const expected = countNeighbours(1, 1, mockField);

            expect(expected).toEqual(8);
        });
    });

    describe('checkIfLivesOn', () => {
        it('should become alive if it was alive and has 2 neighbours', () => {
            expect(checkIfLivesOn(2, true)).toBe(true);
        });

        it('should become alive if it was dead and has 3 neighbours', () => {
            expect(checkIfLivesOn(3, false)).toBe(true);
        });

        it('should die if it was alive and has 1 neighbour', () => {
            expect(checkIfLivesOn(1, true)).toBe(false);
        });

        it('should die if it was alive and has 4 neigbours', () => {
            expect(checkIfLivesOn(1, true)).toBe(false);
        });
    });

    describe('getKey', () => {
        it('should return 1 2', () => {
            expect(getKey({ x: 2, y: 1 })).toBe('1 2');
        });

        it('should return undefined undefined', () => {
            expect(getKey(undefined)).toBe('undefined undefined');
        });
    });

    describe('getRandomBool', () => {
        it('should return true', () => {
            const temp = Math.random;

            Math.random = jest.fn().mockReturnValue(0.4);

            expect(getRandomBool()).toBe(true);

            Math.random = temp;
        });

        it('should return false', () => {
            const temp = Math.random;

            Math.random = jest.fn().mockReturnValue(0.6);

            expect(getRandomBool()).toBe(false);

            Math.random = temp;
        });
    });
});
