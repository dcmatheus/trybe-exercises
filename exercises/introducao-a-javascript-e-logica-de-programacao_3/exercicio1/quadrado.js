let n = 5;
let ast = '*';
let astLine = '';

for (let index = 0; index < n; index += 1) {
  astLine = astLine + ast;
};
for (let index = 0; index < n; index += 1) {
  console.log(astLine);
};