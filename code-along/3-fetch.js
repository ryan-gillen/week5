// 1. find form element
// 2. add event listener on form submit
// 3. on submit event:
//    a. get data from API URL 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
//    b. calculate total bitcoin value in USD currency
//    c. modify output to display `Your _____ Bitcoin is worth ________ USD`

window.addEventListener('DOMContentLoaded', function () {
  // let url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'

  let form = document.querySelector('.bitcoin.form')

  form.addEventListener('submit', async function(event){
    event.preventDefault()

    let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')

    let json = await response.json()
    console.log(json)

    let amount = document.querySelector('#amount').value
    let rate = jason.pbi.USD.rate_float
    let convertedAmount = amount * rate

    let outputElement = document.querySelector('.output')
    outputElement.innerHTML = `Your ${amount} Bitcoin is worth ${convertedAmount}`
    





  })

})
