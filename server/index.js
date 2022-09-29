const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.statusCode = 200; //200 means okay, its been received 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Happy Sweet New Year');
}) 

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});






//3 ways to write a function in javascript

//function nnn(paraName){} or const nnn = function(paraName){}

//const obj = {vvv(){} }       <--- thats a function in a object

//const fatArrow = x => x * 2  <--- passing functin as a parameter, only one expression/line, no need for return since it returns the result of the expression