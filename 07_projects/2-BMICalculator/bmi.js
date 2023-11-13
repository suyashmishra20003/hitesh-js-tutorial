const results = document.querySelector('#results')
const button = document.querySelector('#calcBtn')
const form = document.querySelector('#formId')

let cm = 0
let kg = 0
let bmi;
let lengthDiv = 0

button.addEventListener('click', function clickBtn(params) {
    cm = Number(form.elements[0].value);
    kg = Number(form.elements[1].value);
    if ( document.getElementById('bmiDiv') !== null) {
        document.getElementById('bmiDiv').remove()
    }

    if(cm != '' && kg != '' ){
        bmi = calculateBmi(cm,kg);
        let resultStr = `Your BMI is  ${bmi}  `
        let bmiResult = ''

        if (bmi < 18.6) {
            bmiResult = '(Underweight)'
        }else if (bmi > 18.6 && bmi <= 24.9) {
            bmiResult = '(Normal)'
        }else if (bmi > 24.9  && bmi <=30 ) {
            bmiResult = '(Overweight)'
        }else{
            bmiResult = '(Obease !!!)'
        }



        const div = document.createElement('div')
        const span = document.createElement('span')

        div.innerText = resultStr 
        span.innerText = bmiResult

        div.style.width = '600px'
        div.style.padding = '32px'
        div.style.backgroundColor = 'lightcyan'
        div.style.border = '5px solid gold'
        div.style.color = 'black'
        div.style.borderRadius = '10px'
        div.setAttribute('id','bmiDiv')


        span.style.fontWeight = '600'


        switch (bmiResult) {
            case '(Underweight)':
                span.style.color = 'steelblue'
                break;
            case '(Normal)':
                span.style.color = 'green'
                break;
            case '(Overweight)':
                span.style.color = 'brown'
                break;
            case '(Obease !!!)':
                span.style.color = 'red'
                break;
            default:
                break;
        }
        div.appendChild(span)

        results.appendChild(div)
        lengthDiv++
        console.log(div);
        form.elements[0].value = ''
        form.elements[1].value = ''
    }
  
})



function calculateBmi(heightIncm,weight) {
    let mSquared = (heightIncm/100) ** 2;
    let result = weight/mSquared
    return result.toFixed(1);

}