const buttons = document.querySelectorAll('.button')
const body = document.body
buttons.forEach(
    (item)=>{
        item.addEventListener('click',function overrideColor(event) {
            const color =  event.target.id
            console.log(color , typeof color);
            switch (color) {
                case 'grey':
                    body.style.backgroundColor = color
                    break;
                case 'white':
                    body.style.backgroundColor = color
                    break;
                case 'blue':
                    body.style.backgroundColor = color
                    break;
                case 'yellow':
                    body.style.backgroundColor = color
                    break;
                case 'tomato':
                    body.style.backgroundColor = color
                    break;
                case 'purple':
                    body.style.backgroundColor = color
                    break;
            
                default:
                    break;
            }

           
        })
    }
)

console.log(buttons);
