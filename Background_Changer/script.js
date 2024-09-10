let btnArray = document.querySelectorAll('.button');
let body = document.querySelector('body')

function changeColor(){
    btnArray.forEach((button) =>{
        button.style.backgroundColor = button.id
        button.addEventListener('click', (e) =>{
            body.style.backgroundColor = e.target.id
        })
    })
}

changeColor()