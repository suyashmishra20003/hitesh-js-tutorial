const createDeepCopy = (input) => {
    if (typeof input !== 'object') {
        return input // Base Case
    }

    let copy  = Array.isArray(input) ? [] : {}

    for(let key in input){
        const value = input[key];
        copy[key] = createDeepCopy(value)

    }
             
    return copy
}



const player = {
    firstName:'Suyash',
    lastName:'Mishra',
    location: {
        city:'Khajuraho',
        state:'Madhya Pradesh',
    },
    socre: [1,2,3,4,5,6,7,8,9]
}

let copy = createDeepCopy(player)

console.log(player);
console.log(copy);