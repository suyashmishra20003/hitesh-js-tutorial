const coding = ['js','ruby','python','java','cpp'];

coding.forEach(
    (item, index, arr)=>{
        // console.log(item,index,arr );
    }
)

const myCoding = [
    { language:'javascript',shorthand:'js' },
    { language:'ruby',shorthand:'rb' },
    { language:'python',shorthand:'py' },
    { language:'java',shorthand:'java' },
    { language:'cpp',shorthand:'c' },
]

myCoding.forEach(
    (item)=>{
        console.log(item.shorthand);
    }
)