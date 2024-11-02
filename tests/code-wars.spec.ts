import { test, expect, APIRequest, APIRequestContext } from '@playwright/test';
import { assert } from 'chai';
import axios from 'axios';

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
        testing(1000, 2, 50, 1200, 3);
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

test('Anagram check', () => {
    let firstString = 'lamp';
    let secondString = 'palm';

    function anagramDetection(a: string, b: string) {
        let sortedString1 = firstString.split('').sort().join('');
        let sortedString2 = secondString.split('').sort().join('');

        return sortedString1 === sortedString2;
    }

    expect(anagramDetection(firstString, secondString)).toBeTruthy();
})

test.describe("stringToNumber", () => {
    test("should work for the examples", () => {
        function stringToNumber(str: string): number {
            // return parseInt(str);
            return Number(str);
        }

        assert.strictEqual(stringToNumber("1234"), 1234);
        assert.strictEqual(stringToNumber("605"), 605);
        assert.strictEqual(stringToNumber("1405"), 1405);
        assert.strictEqual(stringToNumber("-7"), -7);
    });
});

test.describe("Basic tests", () => {
    function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
        let sum: number = 0;

        for (let i = 0; i < classPoints.length; i++) {
            sum += classPoints[i];
        }

        let average = sum / classPoints.length;
        return yourPoints > average;
    }

    test("betterThanAverage([2, 3], 5)", () => assert.isTrue(betterThanAverage([2, 3], 5)));
    test("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)", () => assert.isTrue(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)));
    test("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)", () => assert.isTrue(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69)));
    test("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)", () => assert.isFalse(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)));
    test("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)", () => assert.isFalse(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)));
});

test.describe("Trilingual democracy", () => {
    function trilingualDemocracy(group: string): string {
        const langArray: string[] = group.split('');
        let neededLang: string;

        if (langArray[0] === langArray[1] && langArray[1] === langArray[2]) {
            neededLang = langArray[0];
        } else if (langArray[0] !== langArray[1] && langArray[1] !== langArray[2]) {
            neededLang = 'I';
        } else if (langArray.filter(item => item === item).length > 1) {
            neededLang = langArray.filter((item, index, array) => array.indexOf(item) === array.lastIndexOf(item))[0];
        } else {
            neededLang = 'Need to fix';
        }

        return neededLang;
    }

    function act(group: string, expected: string) {
        const actual: String = trilingualDemocracy(group);
        assert.strictEqual(actual, expected, `for group '${group}'`);
    }

    test.describe("Example tests", () => {
        // const exampleTests: string[][] = [["IIK", "K"]];
        const exampleTests: string[][] = [["FFF", "F"], ["IIK", "K"], ["DFK", "I"], ["FDI", "K"]];
        for (let [group, expected] of exampleTests) {
            test.skip(group, () => {
                act(group, expected);
            });
        }
    });
});

test.describe('countPositivesSumNegatives', () => {
    function countPositivesSumNegatives(input: number[]) {
        if (!input || input.length === 0) {
            return [];
        }

        let countPositives = 0;
        let sumNegatives = 0;

        for (let element of input) {
            if (element > 0) {
                countPositives += 1;
            } else if (element < 0) {
                sumNegatives += element;
            } else {
                // console.log(`Element is ${element}`);
            }
        }

        return [countPositives, sumNegatives];

        // return input && input.length
        // ? [
        //     input.filter((p: number) => p > 0).length,
        //     input
        //       .filter((n: number) => n < 0)
        //       .reduce((a: number, b: number) => a + b, 0),
        //   ]
        // : [];
    }

    test('basic tests', () => {
        let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
        let actual = countPositivesSumNegatives(testData)
        let expected: any[] = [10, -65]
        assert.deepEqual(actual, expected)

        testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
        actual = countPositivesSumNegatives(testData)
        expected = [8, -50]
        assert.deepEqual(actual, expected)
    })
})

test.describe('Tech interview Zona3000', () => {
    const nonUniqueNumbers = [3, 5, 4, 2, 1, 6, 8, 7, 9, 5, 6, 9];

    test('return an array of odd values', () => {
        expect(nonUniqueNumbers.filter((element) => element % 2 != 0)).toEqual([3, 5, 1, 7, 9, 5, 9]);
    })

    test('use map', () => {
        expect(nonUniqueNumbers.map((element) => element * 2)).toEqual([6, 10, 8, 4, 2, 12, 16, 14, 18, 10, 12, 18]);
    })
})

test.describe('Review FavBet', () => {
    test('отримати імʼя першого юзера', () => {
        const response = {
            status: "success",
            data: {
                'some users': [
                    {
                        name: 'Alex',
                        age: 33,
                    },
                    {
                        name: 'Vlad',
                        age: 30,
                    }
                ]
            }
        }

        const userArrays = Object.values(response.data)[0];
        const firstUserName = userArrays[0].name;
        console.log(firstUserName);

        expect(firstUserName).toBe('Alex');
    })

    test('отримати з АПІ запиту відповідь', async () => {
        // https://api.sampleapis.com/beers/ale - не працює посилання, взяв https://jsonplaceholder.typicode.com/todos
        // отримати апі запитом список напоїв та вивести в консоль назви напоїв та їх ціну якщо вона дешевше 5$. - Вивів ід та тайтл для юзерів, ід яких менше 5
        // Обʼєкт що отримується має бути типізованим (включати в собі price: string, name: string) - через те що не працює оригінальна лінка, взяв id: string, title: string
        // Типізація об'єкта напою

        interface User {
            id: number;
            title: string;
        }

        async function getAffordableUsers() {
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/todos');
            const users = response.data;

            const affordableUsers = users.filter((user) => user.id < 5);

            affordableUsers.forEach((user) => {
                console.log(`ID: ${user.id}, Title: ${user.title}`);
            });
        }

        await getAffordableUsers();

        // Case 2 Відправка POST запиту та перевірка створеного посту
        interface CreatedUser {
            data: {
                title: string,
                author: string
            },
            id: number
        }

        const responsePost = await axios.post<CreatedUser>('https://jsonplaceholder.typicode.com/posts', {
            data: {
                title: 'Book Title',
                author: 'John Doe',
            }
        });

        expect(responsePost.data.data.author).toBe('John Doe');
        expect(responsePost.data.data.title).toBe('Book Title');
    })
})

test('1768. Merge Strings Alternately', async () => {
    // You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
    // Return the merged string.
    
    function mergeAlternately(word1: string, word2: string) {
        let alternatelyArray: string[] = [];
        const count = word1.length > word2.length ? word1.length : word2.length;

        for (let i = 0; i < count; i++) {
            alternatelyArray.push(word1.split('')[i]);
            alternatelyArray.push(word2.split('')[i]);
        }

        return alternatelyArray.join('');
    }

    console.log(mergeAlternately('ab', 'pqrs'));
})
