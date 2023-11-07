//* for
for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value ==  ${i} `);

    for (let j = 0; j <= 10; j++) {
    // console.log(` ${i} * ${j} = ${i*j} `);
    }
    
}

let myArray = ['Suyash', 'Shikhar', 'Arun', 'Shraddha'];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

//* break and continue

for (let i = 0; i < 20; i++) {
    if (i === 5) {
        // console.log('Detected 5');
        break
    }
    // console.log(`Value of i is ${i} `);    
}

for (let i = 0; i < 20; i++) {
    if (i === 5) {
        console.log('Detected 5');
        continue
    }
    console.log(`Value of i is ${i} `);    
}