import { test, expect } from '@playwright/test';

test('1768. Merge Strings Alternately', async () => {
    // You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
    // Return the merged string.
    // Example 1:
    // Input: word1 = "abc", word2 = "pqr"
    // Output: "apbqcr"
    // Explanation: The merged string will be merged as so:
    // word1:  a   b   c
    // word2:    p   q   r
    // merged: a p b q c r
    // Example 2:
    // Input: word1 = "ab", word2 = "pqrs"
    // Output: "apbqrs"
    // Explanation: Notice that as word2 is longer, "rs" is appended to the end.
    // word1:  a   b 
    // word2:    p   q   r   s
    // merged: a p b q   r   s
    // Example 3:
    // Input: word1 = "abcd", word2 = "pq"
    // Output: "apbqcd"
    // Explanation: Notice that as word1 is longer, "cd" is appended to the end.
    // word1:  a   b   c   d
    // word2:    p   q 
    // merged: a p b q c   d
    
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

test('1071. Greatest Common Divisor of Strings', async () => {
    // For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
    // Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
    // Example 1:
    // Input: str1 = "ABCABC", str2 = "ABC"
    // Output: "ABC"
    // Example 2:
    // Input: str1 = "ABABAB", str2 = "ABAB"
    // Output: "AB"
    // Example 3:
    // Input: str1 = "LEET", str2 = "CODE"
    // Output: ""

    const str1 = 'LEET';
    const str2 = 'CODE';
    
    function gcdOfStrings(str1: string, str2: string) {
        if (str1 + str2 !== str2 + str1) {
            return '';
        } else {
            return (str1.length > str2.length) ? str2 : str1;
        }
    }

    console.log(gcdOfStrings(str1, str2));
})

test('1431. Kids With the Greatest Number of Candies', async () => {
    // There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
    // Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
    // Note that multiple kids can have the greatest number of candies.
    // Example 1:
    // Input: candies = [2,3,5,1,3], extraCandies = 3
    // Output: [true,true,true,false,true] 
    // Explanation: If you give all extraCandies to:
    // - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
    // - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
    // - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
    // - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
    // - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
    // Example 2:
    // Input: candies = [4,2,1,1,2], extraCandies = 1
    // Output: [true,false,false,false,false] 
    // Explanation: There is only 1 extra candy.
    // Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
    // Example 3:
    // Input: candies = [12,1,12], extraCandies = 10
    // Output: [true,false,true]

    const candies1 = [2,3,5,1,3];
    const extraCandies1 = 3;
    const expectedArray1: boolean[] = [true,true,true,false,true];

    const candies2 = [4,2,1,1,2];
    const extraCandies2 = 1;
    const expectedArray2: boolean[] = [true,false,false,false,false];

    const candies3 = [12,1,12];
    const extraCandies3 = 10;
    const expectedArray3: boolean[] = [true,false,true];
    
    function kidsWithCandies(candies: number[], extraCandies: number) {
        let outputArray: boolean[] = [];
        let greatestNumber: number = Math.max(...candies);

        for (let candy of candies) {
            if (candy + extraCandies >= greatestNumber) {
                outputArray.push(true);
            } else {
                outputArray.push(false)
            }
        }

        return outputArray;
    }

    expect(kidsWithCandies(candies1, extraCandies1)).toEqual(expectedArray1);
    expect(kidsWithCandies(candies2, extraCandies2)).toEqual(expectedArray2);
    expect(kidsWithCandies(candies3, extraCandies3)).toEqual(expectedArray3);
})

test('605. Can Place Flowers', async () => {
    // You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
    // Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
    // Example 1:
    // Input: flowerbed = [1,0,0,0,1], n = 1
    // Output: true
    // Example 2:
    // Input: flowerbed = [1,0,0,0,1], n = 2
    // Output: false

    const flowerbed1: number[] = [1,0,0,0,1];
    const n1: number = 1;
    const output1: boolean = true;
    
    const flowerbed2: number[] = [1,0,0,0,1];
    const n2: number = 2;
    const output2: boolean = false;

    function canPlaceFlowers(flowerbed: number[], n: number): boolean {
        let count = 0;
        
        for (let i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                flowerbed[i] = 1;
                count++;
                
                if (count >= n) {
                    return true;
                }
            }
        }
        
        return count >= n;
    }

    expect(canPlaceFlowers(flowerbed1, n1)).toBe(output1);
    expect(canPlaceFlowers(flowerbed2, n2)).toBe(output2);
})

test('345. Reverse Vowels of a String', async () => {
    // Given a string s, reverse only all the vowels in the string and return it.
    // The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
    // Example 1:
    // Input: s = "IceCreAm"
    // Output: "AceCreIm"
    // Explanation:
    // The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
    // Example 2:
    // Input: s = "leetcode"
    // Output: "leotcede"

    const inputString1 = 'IceCreAm';
    const outputString1 = 'AceCreIm';

    const inputString2 = 'leetcode';
    const outputString2 = 'leotcede';

    function reverseVowels(inputString: string): string {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        const chars = inputString.split('');
        let left = 0;
        let right = chars.length - 1;
    
        while (left < right) {
            if (!vowels.has(chars[left])) {
                left++;
            } else if (!vowels.has(chars[right])) {
                right--;
            } else {
                [chars[left], chars[right]] = [chars[right], chars[left]];
                left++;
                right--;
            }
        }
    
        return chars.join('');
    }

    expect(reverseVowels(inputString1)).toBe(outputString1);
    expect(reverseVowels(inputString2)).toBe(outputString2);
})

test('151. Reverse Words in a String', async () => {
    // Given an input string s, reverse the order of the words.
    // A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
    // Return a string of the words in reverse order concatenated by a single space.
    // Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
    // Example 1:
    // Input: s = "the sky is blue"
    // Output: "blue is sky the"
    // Example 2:
    // Input: s = "  hello world  "
    // Output: "world hello"
    // Explanation: Your reversed string should not contain leading or trailing spaces.
    // Example 3:
    // Input: s = "a good   example"
    // Output: "example good a"
    // Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

    const s1 = 'the sky is blue';
    const expectedS1 = 'blue is sky the';

    const s2 = '  hello world  ';
    const expectedS2 = 'world hello';

    const s3 = 'a good   example';
    const expectedS3 = 'example good a';

    function reverseWords(input: string) {
        let reverseWordsArray = input.split(' ').filter(item => item !== '').reverse();

        return reverseWordsArray.join(' ');
    }

    expect(reverseWords(s1)).toBe(expectedS1);
    expect(reverseWords(s2)).toBe(expectedS2);
    expect(reverseWords(s3)).toBe(expectedS3);
})

test('238. Product of Array Except Self', async () => {
    // Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
    // The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
    // You must write an algorithm that runs in O(n) time and without using the division operation.
    // Example 1:
    // Input: nums = [1,2,3,4]
    // Output: [24,12,8,6]
    // Example 2:
    // Input: nums = [-1,1,0,-3,3]
    // Output: [0,0,9,0,0]

    const nums1 = [1,2,3,4];
    const expectedNums1 = [24,12,8,6];

    const nums2 = [-1,1,0,-3,3];
    const expectedNums2 = [0,0,9,0,0];

    function productExceptSelf(nums: number[]) {
        const n = nums.length;
        const answer = new Array(n).fill(1);
    
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            answer[i] = prefix;
            prefix *= nums[i];
        }
    
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            answer[i] *= suffix;
            suffix *= nums[i];
        }
    
        return answer.map(Math.abs);
    }

    expect(productExceptSelf(nums1)).toEqual(expectedNums1);
    expect(productExceptSelf(nums2)).toEqual(expectedNums2);
})
