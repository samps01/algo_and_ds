/**
 *76. Minimum Window Substring
 Given a string S and a string T, find the minimum window in S which will
 contain all the characters in T in complexity O(n).

 Example:

 Input: S = "ADOBECODEBANC", T = "ABC"
 Output: "BANC"
 Note:

 If there is no such window in S that covers all characters in T,
 return the empty string "".
 If there is such window, you are guaranteed that there will
 always be only one unique minimum window in S.
 */

export default function minimumWindowSubstring(s, t) {
    const charSeen = {}; // Scanning the substring char seen in S
    const charNeeded = {}; // Total substring char list
    let missingCharCount = 0;

    // Start startIndex and endIndex with Infinity values for huge difference
    let slowPointer = 0;
    const result = [-Infinity, Infinity];
    for (let i = 0; i < t.length; i++) {
        if ({}.hasOwnProperty.call(charNeeded, t[i])) {
            charNeeded[t[i]]++;
        } else {
            charNeeded[t[i]] = 1;
            charSeen[t[i]] = 0; // initialize with 0, increment based on occurrence of the char in S

            // missingCharCount should be for unique char only,
            // hence instantiating once for one char
            // eg "AA" -> missingCharCount will be 1
            // eg "ABC -> missingCharCount will be 3
            missingCharCount++;
        }
    }

    for (let j = 0; j < s.length; j++) {
        const value = s[j];
        if ({}.hasOwnProperty.call(charNeeded, value)) {
            charSeen[value]++;

            // Should be equal to the total occurrence of that char in T
            // to deduct missingCharCount
            if (charSeen[value] === charNeeded[value]) {
                missingCharCount--;
            }
        }

        while (missingCharCount === 0) {
            const diff = result[1] - result[0];
            // Since we want minimum window - replace it with min difference
            if (diff > j - slowPointer) {
                result[0] = slowPointer;
                result[1] = j;
            }

            const firstChar = s[slowPointer];
            if ({}.hasOwnProperty.call(charNeeded, firstChar)) {
                charSeen[firstChar]--;
                // As charSeen->char should be equal to the charNeeded->char
                // if is it less that means we need char, hence increment missingCharCount
                if (charSeen[firstChar] < charNeeded[firstChar]) {
                    missingCharCount++;
                }
            }
            slowPointer++;
        }
    }
    return result[0] === -Infinity ? '' : s.slice(result[0], result[1] + 1);
}
