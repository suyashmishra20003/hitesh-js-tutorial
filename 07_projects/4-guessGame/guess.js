const form = document.querySelector('.form')
const submitBtn = document.getElementById('subt')
const guessSpan = document.getElementById('guesses')
let guessCount = 1
let remainingGuesses = 10
let previousGuessStr = ''
let randomNumber = 0
let testArr = []
let isRepeated = false


form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const val = Number(form.elements[0].value)
    if(testArr.indexOf(val) === -1 && val <= 100 && val >= 1){
        testArr.push(val)
        isRepeated  = true
    }
  

    if(val <= 100 && val >= 1 && isRepeated){
        document.getElementById('errMsg').textContent = ''
        if (randomNumber == 0) {
            randomNumber = generateRandomNumber()

        }
        if (randomNumber == val) {
            document.getElementById('errMsg').textContent = `Congratulations !!! You Won the game, ${val} is the magic number`
            guessCount = 1
            remainingGuesses = 10
            previousGuessStr = ''
            randomNumber = generateRandomNumber()
            guessSpan.textContent = previousGuessStr
            document.getElementById('lastResult').textContent = remainingGuesses + ''
            isRepeated = false
            testArr = []
            return;
        }else{
        }
        if (guessCount > 0 && guessCount < 10) {
            guessCount++
            remainingGuesses--
            document.getElementById('errMsg').textContent = ` Guess Again !!! `

        }else{
            guessCount = 1
            document.getElementById('errMsg').textContent = `Game Over!! Random Number waas ${randomNumber}. Guess Again !!! `

            remainingGuesses = 9
            randomNumber = generateRandomNumber()
            previousGuessStr = ''
            testArr = []
            isRepeated = false
        }

        previousGuessStr = previousGuessStr + '  ' + val 
        
        guessSpan.textContent = previousGuessStr
        document.getElementById('lastResult').textContent = remainingGuesses + ''
        form.elements[0].value = ''
        isRepeated = false
    }else{
        document.getElementById('errMsg').textContent = 'This is an invalid number enter a number which is between 1 to 100'
        
    }

  
})

function generateRandomNumber(){
    const randomNumber = Math.floor((Math.random() * 100) + 1 )
    if(randomNumber === 100){
        randomNumber -1
    }
    console.log('Random Number => ' ,  randomNumber);
    return randomNumber    
}

guessSpan.style.backgroundColor = 'white'
guessSpan.style.color = 'black'