/*
 * Given a string, return its encoding defined as follows:
 * - First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
 *   for example, "aabbbc" is divided into ["aa", "bbb", "c"]
 * - Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating
 *   character
 *   for example, substring "bbb" is replaced by "3b"
 * - Finally, all the new strings are concatenated together in the same order and a new string is returned.
 */

const lineEncoding = (s) => {
  let count = 1; //1
  let ans = ""; //1 
  for (let i = 0; i < s.length; i++) { //5
    if (s[i] === s[i + 1]) { //6
      count++; //1
    } else {
      if (count > 1) { //2
        ans += count + s[i]; //6
      } else {
        ans += s[i]; //4
      }
      count = 1; //1
    }
  }
  return ans; //1 
};

/**
 * T10(n) = 1 + 1 + 5*n (6 + 1 + 2 + 6 + 4 + 1 ) + 1
 * T10(n) = 2 + 5*n (20) + 1
 * T10(n) = 5n(1) + 1
 * T10(n) = n + 1 
 * O(n) = n
 */
