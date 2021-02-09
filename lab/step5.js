// We wrote and provided this function so that you won't have to worry about constructing the forecast html.
// It's job is to return the html string already styled.
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

  // 5. (optional) once you notice the repetition, you can refactor to use the querySelectorAll() function to find and loop through each city button and add the event listener and function (step 3)

  // find all the location buttons using querySelectorAll and a selector matching all of the desired elements
  let allLocationButtons = document.querySelectorAll('.forecast-button')

  // loop through each city button
  for (let i = 0; i < allLocationButtons.length; i++) {
    let locationButton = allLocationButtons[i];
    
    // add the event listener and function to each location button (step 3)

    locationButton.addEventListener('click', async function(event) {
      event.preventDefault() // supress the browser's default click behavior

      // instead of hardcoding the name of the location, get the location of the clicked element using event.target
      let location = event.target.innerHTML

      let forecastHeader = document.querySelector('.forecast-header')
      forecastHeader.innerHTML = `${location} Forecast`

      let apiKey = '' // <<<< fill in with your api key from step 1 (or the api key we provided)
      let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3`)
      let json = await response.json()
      let days = json.forecast.forecastday // find the array within the data

      document.querySelector('.forecast').innerHTML = '' // clearing any existing forecast html from a previous click

      // looping through the array
      for (let i = 0; i < days.length; i++) {
        let day = days[i]

        // inserting html with each day's forecast using the forecastHTML() function we provided/wrote for you (defined above)
        let forecastDiv = document.querySelector('.forecast')
        let html = forecastHTML(day)
        forecastDiv.insertAdjacentHTML('beforeend', `${html}`)
      }
    })
  }

})
