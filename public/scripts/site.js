// Xana Navoichick - Assignment 9 Joke API

(async () => {
    const h2 = document.querySelector('h2')
    const h3 = document.querySelector('h3')
    const button = document.getElementById('apibutton')

    button.addEventListener('click', async () => {
        const response = await fetch('/api/v1/random-joke')
        const { joke, punchline } = await response.json()
        h2.textContent = joke
        h3.textContent = punchline
    })

})()
