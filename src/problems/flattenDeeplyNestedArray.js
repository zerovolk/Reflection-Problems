// Первый вариант
export const flat1 = function (arr, n) {
    const result = []
    arr.forEach(el => {
        if (Array.isArray(el) && n > 0) {
            result.push(...flat(el, n - 1))
        } else {
            result.push(el)
        }
    })
    return result
};

// Второй вариант
export const flat2 = function (arr, n) {
    const result = []
    function helper(arr, depth) {
        for(let value of arr) {
            if (Array.isArray(value) && depth > 0) {
                helper(value, depth - 1)
            } else {
                result.push(value)
            }
        }
        return result
    }
    return helper(arr, n)
};

// Третий вариант
export const flat3 = function (arr, n) {
    return arr.flat(n)
};
