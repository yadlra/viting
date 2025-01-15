// main.js
import './style.css'

document.querySelector('#app').innerHTML = `
  <div id="tweet-box">
    <textarea id="tweet" rows="3" cols="50"></textarea>
    <p id="counter">280 characters left</p>
  </div>
`

const textarea = document.querySelector('#tweet')
const counter = document.querySelector('#counter')

textarea.addEventListener('input', () => {
    const remaining = 280 - textarea.value.length
    counter.textContent = `${remaining} characters left`
    
    counter.style.color = remaining < 50 ? 'red' : 'black'
})