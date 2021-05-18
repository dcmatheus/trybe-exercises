// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();

const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum >= 8000) {
    throw new Error();
  }

  return sum;
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();