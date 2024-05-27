const content = document.getElementById('content')

const text = 'Hola mundo'
let i=0
const lenght = text.length
const interval = setInterval(()=>{
    content.textContent+=text[i++]
    if(i>=lenght) clearInterval(interval)
},100)