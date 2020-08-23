import $ from 'jquery'
console.log($('div'))

const app = document.querySelector('#app')
const h1 = document.createElement('H1')
h1.innerText='main.js'

app.appendChild(h1)