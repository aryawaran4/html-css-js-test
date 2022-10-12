// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number){
    var result = []
    var even = []
    var odd = []
    number.forEach(element => {
        if(element % 2 == 0){
            even.push(element)
        }else{
            odd.push(element)
        }
    });
    result.push(odd)
    result.push(even)
    return result
}

console.log(result(number))