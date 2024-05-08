const arr = [1,2,3,4,5,6,7,8,9,10,2]
const duplicate = arr.filter(
    (item,index,arr)=>{
        return arr.indexOf(item) !== index
    }
)

console.log(duplicate);