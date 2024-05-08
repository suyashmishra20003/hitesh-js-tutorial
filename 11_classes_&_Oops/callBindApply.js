let userDetails = {
    firstName: 'Suyash',
    lastName: 'Mishra',
    location: {
        city: 'Khajuraho',
        state: 'Madhya Pradesh'
    },

    printDetails : function printDetails() {
        console.log(this);
    }
  
}





let newDetails = {
    firstName: 'Sagar',
    lastName: 'Singh',
    location: {
        city: 'Delhi',
        state: 'Delhi'
    },
}



// userDetails.printDetails()
// userDetails.printDetails.call(newDetails)


//todo              Difference between call and apply

let obj1 = {
    value: 10
};

let obj2 = {
    value: 20
};

function getValue() {
    return this.value;
}

// Using call
console.log(getValue.call(obj1)); // Outputs: 10
console.log(getValue.call(obj2)); // Outputs: 20

// Using bind
let getValueFromObj1 = getValue.bind(obj1);
let getValueFromObj2 = getValue.bind(obj2);

console.log(getValueFromObj1()); // Outputs: 10
console.log(getValueFromObj2()); // Outputs: 20



let obj = {
    value: 100
};

function getValue(prefix) {
    return prefix + this.value;
}

console.log(getValue.call(obj, "Value: ")); // Outputs: Value: 100
console.log(getValue.apply(obj, ["Value: ","Suyash"])); // Outputs: Value: 100
