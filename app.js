const input = document.querySelector('#input')
const btn = document.querySelector('.btn')
const messageBody = document.querySelector('.message-Body')

btn.addEventListener('click',()=>{
    if(input.value === ''){
        alert("Please Provide a Message")
    }else{
        const msg = document.createElement('h5')
        msg.className = 'message'
        msg.textContent = input.value
        messageBody.appendChild(msg)
        input.value = ''
    }
})