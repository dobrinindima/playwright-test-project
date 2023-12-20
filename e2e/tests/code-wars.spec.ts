import { test, expect } from '@playwright/test';
import { assert } from 'chai';

test.describe('Code Wars', () => {
    test('Growth of a Population', async () => {
        const nbYear = (p0: number, percent: number, aug: number, p: number): number => {
            let i: number;

            for (i = 0; p0 < p; i++) {
                p0 += p0 * (percent / 100) + aug;
            }

            return i;
        }

        function testing(p0: number, percent: number, aug: number, p: number, expected: number) {
            assert.strictEqual(nbYear(p0, percent, aug, p), expected);
        }
        testing(1500, 5, 100, 5000, 15);
        testing(1500000, 2.5, 10000, 2000000, 10);
        testing(1500000, 0.25, 1000, 2000000, 94);
        testing(1500000, 0.25, -1000, 2000000, 151);
    })

    test('Reverse the string', async () => {
        const mainString: string = 'dlrow';

        const mainArray = mainString.split('');
        let reversedArray: string[] = [];

        for (let arrayElement of mainArray) {
            reversedArray.unshift(arrayElement);
        }

        let reversedString = reversedArray.join('');

        expect(reversedString).toBe('world');
    })

    test('Number to string', async () => {
        function numberToString(num: number): string {
            return num.toString();
        }

        expect(numberToString(67)).toBe('67');
    })

    test('Convert number to reversed array of digits', async () => {
        const digitize = (n: number): number[] => {
            let stringFromNumber = n.toString();
            let arrayFromString = Array.from(stringFromNumber);

            let digitArray: number[] = [];

            for (let newElement of arrayFromString) {
                digitArray.unshift(Number(newElement));
            }

            return digitArray;
        };

        assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
        assert.deepEqual(digitize(0), [0]);
    })

    test('Beginner Series #3 Sum of Numbers', async () => {
        function getSum(a: number, b: number): number {
            const min = Math.min(a, b);
            const max = Math.max(a, b);

            let sum = 0;

            for (let i = min; i <= max; i++) {
                sum += i;
            }

            return sum;
        }

        assert.strictEqual(getSum(0, -1), -1);
        assert.strictEqual(getSum(0, 1), 1);
        assert.strictEqual(getSum(-1, 2), 2);
    })
})
