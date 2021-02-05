// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener

document.addEventListener('DOMContentLoaded', function(event) {
    // alert('the page is loaded!')

    let clickMeButton = document.querySelector('.click-me-button')
    
    clickMeButton.addEventListener('click', function(event){

        event.preventDefault()
        console.log(event)
    
        let outputElement = document.querySelector('.output')
        outputElement.insertAdjacentHTML('beforeend', `
        <p>Click me! was clicked </p>

        `)

        //let googleLink = document.querySelector

    })

    console.log('clicked')

    Let nameInput = document.querySelector('#firstName')

    nameInput.addEventListener('keyup', function(event) {
        let greetElement  = document.querySelector('#greet')

        if (nameInput.value.length > 0) {
            greetElement.insertAdjacentHTML = `Hi, ${nameInput}`
        } else {
            
        }


    })



})