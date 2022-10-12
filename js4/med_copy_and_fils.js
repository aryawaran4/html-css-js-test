// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) {
    arr1.splice(0, 3)
    return [7, 7, 7].concat(arr1)
}

console.log(result(arr1));