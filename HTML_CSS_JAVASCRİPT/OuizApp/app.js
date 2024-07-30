const quizData =[
    {
        question: 'What is the result (24*4)*0+945',
        a: '80',
        b: '0',
        c: '945',
        d: '23 ',
        e: '5',
        correct: 'c',
    },
    {
        question: 'which is the name given to the region found in the brain',
        a: 'omirilik onion',
        b: 'omirilik garlic',
        c: 'omirilik radish',
        d: 'omirilik brocoli',
        e: 'omirilik tomato',
        correct: 'a',
    },
    {
        question: 'Which one usually sharpening ',
        a: 'weapon',
        b: 'knife',
        c: 'fork',
        d: 'plate',
        e: 'bowl',
        correct: 'b',
    },
    {
        question: 'İf two times two are subtracted from three times three ,result?',
        a: '43',
        b: '6',
        c: '23',
        d: '90',
        e: '5',
        correct: 'e',
    },  

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.querySelector('#submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click" , ()=>{
    const answer = getSelected()

   // console.log(answer)

   if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++
      
    }
    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML=`
        <h2> Test tamamlandı, ${score*25} puan aldınız </h2>
        <button class="submit" onclick="location.reload()">Tekrar deneyiniz</button>
    `
    }
   }
})