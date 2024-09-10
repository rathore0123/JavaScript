const clock = document.getElementById('clock')

setInterval(() =>{
    const date = new Date();
    clock.textContent = date.toLocaleTimeString()
},100)

