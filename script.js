const txtArea = document.getElementById('txtArea')
const decrementBtn = document.getElementById('btn-decrement')
const resetBtn = document.getElementById('btn-reset') 
const incrementBtn = document.getElementById('btn-increment')

var count = 0

decrementBtn.addEventListener('click', () =>{
    count= count - 1
    txtArea.textContent = count
    txtArea.style.color = 'red'
})

resetBtn.addEventListener('click', () =>{
    count = 00
    txtArea.textContent = count
})

incrementBtn.addEventListener('click', ()=>{
    count = count + 1
    txtArea.textContent = count
    txtArea.style.color = 'green'
})