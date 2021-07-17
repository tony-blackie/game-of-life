import { create } from 'domain';
import { getRandomBool, createField } from '../utils';

describe('utils', () => {
    describe('createField', () => {
        it('should return double dimension array with correct structure of cells', () => {
            const temp = Math.random;
            Math.random = jest.fn().mockReturnValue(0.6);

            const expectedResult = [
                [
                    { y: 0, x: 0, isAlive: false },
                    { y: 0, x: 1, isAlive: false },
                    { y: 0, x: 2, isAlive: false },
                ],
                [
                    { y: 1, x: 0, isAlive: false },
                    { y: 1, x: 1, isAlive: false },
                    { y: 1, x: 2, isAlive: false },
                ],
                [
                    { y: 2, x: 0, isAlive: false },
                    { y: 2, x: 1, isAlive: false },
                    { y: 2, x: 2, isAlive: false },
                ],
            ];

            expect(createField(3, 3)).toEqual(expectedResult);

            Math.random = temp;
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
