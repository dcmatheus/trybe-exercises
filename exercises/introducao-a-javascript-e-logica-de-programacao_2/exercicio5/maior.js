let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let comparar of numbers) {
  if  (comparar > maior) {
    maior = comparar
  } else {
    maior = maior
  }
}

console.log(maior);