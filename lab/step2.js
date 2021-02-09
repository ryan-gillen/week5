// We wrote and provided this function so that you won't have to worry about constructing the forecast html.
// Its job is to return the html string already styled.
// It was already in your code.  You can change it if you want to see what will happen, but otherwise feel free to ignore it.
function forecastHTML(dailyForecast) {
  return `
    <div class="text-center space-y-2">
      <img src="https:${dailyForecast.day.condition.icon}" class="mx-auto">
      <h1 class="text-2xl text-bold text-gray-500">${dailyForecast.date}</h1>
      <h2 class="text-xl">${dailyForecast.day.mintemp_f} - ${dailyForecast.day.maxtemp_f}</h2>
      <p class="text-gray-500">${dailyForecast.day.condition.text}</h1>
    </div>
  `
}

// You may want to write other functions, but you don't need to!
// All your code can go inside of this event listener ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
window.addEventListener('DOMContentLoaded', function() {
  // ******* YOUR CODE STARTS HERE *******

  // 2. find the "Chicago" city button using querySelector() and add a click event listener

  let chicagoButton = document.querySelector('#chicago-forecast')
  chicagoButton.addEventListener('click', function(event) {
    event.preventDefault() // supress the browser's default click behavior
    console.log('chicago button was clicked')
  })

})