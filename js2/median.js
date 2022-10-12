// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    var concat = input;
    concat = concat.sort(function (a, b) { return a - b });
    var length = concat.length;

    if (length % 2 == 1) {
        return concat[(length / 2) - .5]
    }
    else {           
        return (concat[length / 2] + concat[(length / 2) - 1]) / 2;
    }
}

console.log(result(input));