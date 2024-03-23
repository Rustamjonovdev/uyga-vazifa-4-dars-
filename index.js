const input = document.querySelector('input')
const addBtn = document.querySelector('.add-btn')
const ul = document.querySelector('ul')
const clearBtn = document.querySelector('.clear')

input.addEventListener('input', () => {
    new Audio("./music/button-click.mp3").play();
})

addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    


    ul.innerHTML += `<li>${input.value}</li>`

    input.value = " "
})

clearBtn.addEventListener('click', () =>{
    ul.innerHTML = " "
}
)