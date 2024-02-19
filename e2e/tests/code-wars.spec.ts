import { test, expect } from '@playwright/test';
import { assert } from 'chai';

test.describe('Code Wars', () => {
    test('Growth of a Population', () => {
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

    test('Reverse the string', () => {
        const mainString: string = 'dlrow';

        const mainArray = mainString.split('');
        let reversedArray: string[] = [];

        for (let arrayElement of mainArray) {
            reversedArray.unshift(arrayElement);
        }

        let reversedString = reversedArray.join('');

        expect(reversedString).toBe('world');
    })

    test('Number to string', () => {
        function numberToString(num: number): string {
            return num.toString();
        }

        expect(numberToString(67)).toBe('67');
    })

    test('Convert number to reversed array of digits', () => {
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

    test('Beginner Series #3 Sum of Numbers', () => {
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

    test('Review test', () => {
        // Умова:
        // Створіть функцію, яка приймає на вхід enum (який містить дві ролі: "юзер" та "менеджер") та вхідний рядок, в цій функції використайте switch,
        // якщо вхідний enum має значення "юзер", функція повертає true або false, в залежності від того, чи є вхідний рядок паліндромом
        // (послідовність символів, яка читається однаково як зліва направо, так і справа наліво).Якщо ж enum має значення "менеджер",
        // функція повертає об'єкт, який відповідає певному інтерфейсу, інтерфейс опишіть самостійно.

        interface MyInterface {
            name: string;
            role: string;
        }

        enum Role {
            user = 'user',
            manager = 'manager',
            unknown = 'unknown'
        }

        function myFunc(account: string, role: Role) {

            switch (role) {
                case Role.user:
                    const myString = account.toLowerCase();
                    for (let i = 0; myString.length / 2 > i; i++) {
                        if (myString[i] !== myString[myString.length - 1 - i]) {
                            return false;
                        } return true;
                    };
                case Role.manager:
                    const person: MyInterface = {
                        name: 'interfaceName',
                        role: 'interfaceRole',
                    };
                    return person.name;
                default:
                    break;
            }
        }

        expect(myFunc('anna', Role.user)).toBeTruthy;
        expect(myFunc('anne', Role.manager)).toBe('interfaceName');
        expect(myFunc('anna', Role.unknown)).toBeUndefined;
    })
})

test.describe('disemvowel', () => {
    test('should pass a sample test', () => {
        function disemvowel(str: string): string {
            return str.replace(/[aeiouAEIOU]/g, '');
        }
        assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
    });
});

test.describe('Even or Odd', () => {
    function evenOrOdd(n: number): string {
        if (n % 2 == 0) {
            return 'Even'
        } else {
            return 'Odd'
        }

        // Or:
        // return n %2=== 0 ? 'Even' :'Odd';
    }

    test("evenOrOdd(1) should return 'Odd'", () => {
        assert.equal(evenOrOdd(1), "Odd");
    });

    test("evenOrOdd(2) should return 'Even'", () => {
        assert.equal(evenOrOdd(2), "Even");
    });

    test("evenOrOdd(-1) should return 'Odd'", () => {
        assert.equal(evenOrOdd(-1), "Odd");
    });

    test("evenOrOdd(-2) should return 'Even'", () => {
        assert.equal(evenOrOdd(-2), "Even");
    });

    test("evenOrOdd(0) should return 'Even'", () => {
        assert.equal(evenOrOdd(0), "Even");
    });

})

test.describe('Basic tests', () => {
    test('My head is at the wrong end!', () => {
        function fixTheMeerkat(arr: string[]): string[] {
            const fixedArray: string[] = [];


            for (let element of arr) {
                fixedArray.unshift(element);
            }

            // arr.forEach((name) => fixedArray.unshift(name));

            return fixedArray;

            // return arr.reverse();
        }

        expect(fixTheMeerkat(['tail', 'body', 'head'])).toEqual(['head', 'body', 'tail']);
        expect(fixTheMeerkat(['tails', 'body', 'heads'])).toEqual(['heads', 'body', 'tails']);
        expect(fixTheMeerkat(['bottom', 'middle', 'top'])).toEqual(['top', 'middle', 'bottom']);
        expect(fixTheMeerkat(['ground', 'rainbow', 'sky'])).toEqual(['sky', 'rainbow', 'ground']);
        expect(fixTheMeerkat(['lower legs', 'torso', 'upper legs'])).toEqual(['upper legs', 'torso', 'lower legs']);
    });
});

test('Function 1 - hello world', () => {
    function greet() {
        return 'hello world!';
    }
    assert.equal(greet(), "hello world!")
})

test.describe('countSheeps', () => {
    test("should work correctly", () => {
        var array1 = [true, true, true, false,
            true, true, true, true,
            true, false, true, false,
            true, false, false, true,
            true, true, true, true,
            false, false, true, true];

        function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
            let i: number = 0;

            arrayOfSheep.forEach(element => {
                if (element === true) {
                    i += 1;
                }
            })

            return i;

            // return arrayOfSheep.filter(Boolean).length;
            // return arrayOfSheep.filter(e => e === true).length;
        }

        const result1 = countSheeps(array1);
        expect(result1).toEqual(17);
        // expect(result1).toEqual(17, "There are 17 sheeps in total, not " + result1);
    });
});

test.describe("getCount", () => {
    class Kata {
        static getCount(str: string): number {
            let i: number = 0;
            for (let element of str.split('')) {
                const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

                if (vowelsArray.includes(element)) {
                    i += 1;
                }
            }
            return i;
        }
    }
    test("should pass a sample test", () => {
        assert.strictEqual(Kata.getCount("abracadabra"), 5)
    });
});

test('Tech interview Patrianna', () => {
    function mixArrays(firstArray: number[], secondArray: string[]) {
        let mixedArray: (number | string)[] = [];
        for (let i = 0; i < firstArray.length; i++) {
            mixedArray.push(firstArray[i]);
            mixedArray.push(secondArray[i]);
        }

        return mixedArray;
    }

    let a = [1, 2, 3, 4, 5];
    let b = ["a", "b", "c", "d", "e"];
    let oracle = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"];

    expect(mixArrays(a, b)).toEqual(oracle);
})
