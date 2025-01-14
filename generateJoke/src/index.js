import generateJoke from "./generate-Joke";
import './styles/main.scss';
import laughing from './assets/laughing.svg'


const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

console.log(generateJoke());
console.log(4);