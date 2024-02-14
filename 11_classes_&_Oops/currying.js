function addition(a){
    return function(b){
        return function (c) {
            return a + b + c
        }
    }
}

let res = addition(1)

let data = res(4)

let data2 = data(7)

console.log(data2);

const result = addition(1)(4)(7)

console.log(result);