const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()


//async
async function generateJoke(){
    const config ={
        headers: {
            accept: 'application/json'
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML =data.joke
}
/*
then
function generateJoke(){
    const config = {
        header: {
            accept:'application/json',
        },
    }

    fetch ('https://icanhazdadjoke.com', config)
      .then((res)=> res.json())
      .then((data) =>{
        jokeEl.innerHTML =data.joke
      })
}*/