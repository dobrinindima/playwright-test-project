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

    test('Review test', async () => {
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

test.describe('disemvowel', async () => {
    test('should pass a sample test', async () => {
        function disemvowel(str: string): string {
            return str.replace(/[aeiouAEIOU]/g, '');
        }
        assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
    });
});

test.describe('Even or Odd', async () => {
    function evenOrOdd(n: number): string {
        if (n % 2 == 0) {
            return 'Even'
        } else {
            return 'Odd'
        }

        // Or:
        // return n %2=== 0 ? 'Even' :'Odd';
    }

    test("evenOrOdd(1) should return 'Odd'", async () => {
        assert.equal(evenOrOdd(1), "Odd");
    });

    test("evenOrOdd(2) should return 'Even'", async () => {
        assert.equal(evenOrOdd(2), "Even");
    });

    test("evenOrOdd(-1) should return 'Odd'", async () => {
        assert.equal(evenOrOdd(-1), "Odd");
    });

    test("evenOrOdd(-2) should return 'Even'", async () => {
        assert.equal(evenOrOdd(-2), "Even");
    });

    test("evenOrOdd(0) should return 'Even'", async () => {
        assert.equal(evenOrOdd(0), "Even");
    });
})
