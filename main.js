const content = document.getElementById('content')


async function animation(){
    const text = content.textContent
    content.textContent=''
    const lenght = text.length
    for(let i=0;i<lenght;i++){
        let char = ''
        const txt = content.textContent
        await new Promise((resolve)=>{
            const interval = setInterval(()=>{
                char=String.fromCharCode(random(32,122))
                content.textContent=txt+char
                if(char==text[i]){
                    clearInterval(interval)
                    resolve()
                }
            },10)
        })
    }
}

function random(min,max){
    max++
    return Math.floor(Math.random() * (max - min) + min);
}

animation()