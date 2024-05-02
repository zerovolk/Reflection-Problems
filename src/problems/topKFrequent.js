// in nums = [1,1,1,2,2,3], k = 2

export const topKFrequent = function(nums, k) {
    const map = new Map()
    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1)
    }
    const result = []
    for (let [key, value] of map) {
        result.push([key, value])
    }
    console.log(result)
    result.sort((a, b) => b[1] - a[1])
    console.log(result)
    return result.slice(0, k).map((x) => x[0])
};
