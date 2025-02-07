
let heading2 = document.getElementsByClassName('heading2')

heading2 = Array.from(heading2)

heading2.forEach((val)=>{
    val.style.color = "red"
})

//to select all the li from ul
let ul = document.querySelectorAll('ul li')
ul = Array.from(ul)
console.log(ul)
//selected every li from ul and change color in js
ul.forEach((val)=>{
    val.style.color = 'grey'
    val.style.padding = '5px'
    val.style.display = 'inline-block'
    val.style.border = 'solid blue 2px'
    val.style.borderRadius = '5px'
})