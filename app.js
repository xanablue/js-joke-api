// Xana Navoichick - Assignment 9 Joke API

const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const root = path.join(__dirname, 'public')

const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts."
    },
    {
        id: 4,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta."
    },
    {
        id: 5,
        joke: "Why can't you give Elsa a balloon?",
        punchline: "Because she will let it go."
    },
    {
        id: 6,
        joke: "Why don't eggs tell jokes?",
        punchline: "Because they might crack up."
    },
    {
        id: 7,
        joke: "What do you call a fish wearing a bowtie?",
        punchline: "Sofishticated."
    },
    {
        id: 8,
        joke: "Why did the math book look sad?",
        punchline: "Because it had too many problems."
    },
    {
        id: 9,
        joke: "What did one wall say to the other wall?",
        punchline: "I'll meet you at the corner."
    },
    {
        id: 10,
        joke: "Why did the computer go to the doctor?",
        punchline: "Because it had a virus."
    }
]

app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(index.html, { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const random = Math.floor(Math.random() * jokes.length)
    response.json(jokes[random])
})

app.listen(port, () => {
    console.log(`Successful connection to http://localhost:${port}`)
})