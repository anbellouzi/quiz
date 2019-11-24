const questions = [
  {
    q: 'Waldeinsamkeit',
    a: [
      'The feeling of longing for an absent something or someone that you love but might never return.',
      'Finding beauty in imperfections.',
      'A declaration of one’s hope that they’ll die before another person because of how unbearable it would be to live without them.'
      ],
    correct: 0
  },
  {
    q: 'Wabi-Sabi',
    a: [
      'Finding beauty in imperfections.',
      'The feeling of longing for an absent something or someone that you love but might never return.',
      'A declaration of one’s hope that they’ll die before another person because of how unbearable it would be to live without them.'
      ],
    correct: 0
  },
  {
    q: 'Saudade',
    a: [
      'Finding beauty in imperfections.',
      'A declaration of one’s hope that they’ll die before another person because of how unbearable it would be to live without them.',
      'The feeling of longing for an absent something or someone that you love but might never return.'
      ],
    correct: 0
  },
  {
    q: 'Ya’aburnee',
    a: [
      'Finding beauty in imperfections.',
      'A declaration of one’s hope that they’ll die before another person because of how unbearable it would be to live without them.',
      'The feeling of longing for an absent something or someone that you love but might never return.'
      ],
    correct: 0
  },
]


function init() {
  const quizEl = document.getElementById('quiz')

  let quizStr = ''

  questions.forEach( function(question, qIndex) {
    let answerStr = ''
    const answerOrder = randomRange(question.a.length)
    question.a.forEach(function(answer, aIndex){
      answerStr += `
              <li style="order: ${answerOrder[aIndex]}">
                <label>
                  <input
                    type="radio"
                    name="question-${qIndex}"
                    data-correct="${question.correct === aIndex}">
                  ${answer}
                </label>
              </li>
              `


    })
    quizStr += ` <form>
                  <h1> ${question.q} </h1>
                  <div class="alert"> </div>
                  <ul style="display: flex;flex-direction:column;">
                    ${answerStr}
                  </ul>
                  <button type="submit">Submit</button>
                </form>
                `
  })

  quizEl.innerHTML = quizStr

  //form clicked
  quizEl.addEventListener('submit', function(e) {
    e.preventDefault()
    // list all of the answers in e.target
    // e.target.querySelectorAll
    const alert = e.target.querySelector("div.alert")
    const selectedInput = e.target.querySelector('input[type=radio]:checked')
    if (selectedInput === null) {
      alert.innerHTML = "Please select an answer"
      alert.style.color = "red"
    }
    else if(selectedInput.dataset.correct === "true"){
      alert.innerHTML = "That's correct!"
      alert.style.color = "green"
    }
    else {
      alert.innerHTML = "Oops! try again"
      alert.style.color = "red"
    }

  })
  //end of form click


} //end init()


init()

function random(n) {
  const r = Math.random() * n
  return Math.floor(r)

}

function randomRange(x) {
  const arr = []
  for (let i=0; i<x; i++) {
    arr.push(i)
  }

  const randomArr = []
  while (arr.length > 0) {
    const randomIndex = random(arr.length)
    const randomNumber = arr[random(arr.length)]
    randomArr.push(randomNumber)
    arr.splice(randomIndex, 1)
  }

  return randomArr
}

console.log(randomRange(10))

// for (let i=0; i<100; i++) {
//   random(10)
// }
