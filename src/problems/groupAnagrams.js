// in ["eat","tea","tan","ate","nat","bat"]
// out [["bat"],["nat","tan"],["ate","eat","tea"]]
export const groupAnagrams = function(strs) {
    const hash = {}

    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split("").sort().join("")

        if (!hash[sortedStr]) {
            hash[sortedStr] = [strs[i]]
        } else {
            hash[sortedStr].push(strs[i])
        }
    }

    return Object.values(hash)
};

