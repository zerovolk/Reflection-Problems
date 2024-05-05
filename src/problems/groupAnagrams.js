// in ["eat","tea","tan","ate","nat","bat"]
// out [["bat"],["nat","tan"],["ate","eat","tea"]]
export const groupAnagrams = function(wordsArray) {
    const hash = {}

    for (let i = 0; i < wordsArray.length; i++) {
        const sortedStr = wordsArray[i].split("").sort().join("")

        if (!hash[sortedStr]) {
            hash[sortedStr] = [wordsArray[i]]
        } else {
            hash[sortedStr].push(wordsArray[i])
        }
    }

    return Object.values(hash)
};

