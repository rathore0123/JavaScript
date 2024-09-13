const randomColor = () => {
    const hexValues = '0123456789abcdef'
    let color = '#'
    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random()*hexValues.length);
        console.log(index); 
        color += hexValues[index];  
    }
    document.body.style.background = color;
}
let startColorChanging

document.querySelector('#start').addEventListener('click',()=>{
    if(!start.classList.contains('active')){
        startColorChanging = setInterval(randomColor,1200)
    }
    start.classList.add('active');
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(startColorChanging);
    start.classList.remove('active');
})