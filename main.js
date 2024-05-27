const content = document.getElementById('content')

const text = content.textContent
content.textContent=''
let i=0
const lenght = text.length
const interval = setInterval(()=>{
    content.textContent+=text[i++]
    if(i>=lenght) clearInterval(interval)
},100)