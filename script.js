const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd96a4e6ea5msh2ffd62a597d5b41p1c88e1jsn4ca07831f676',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	let city1 = document.getElementById('city1')
	city1.innerHTML = `<h1>Weather Of : ${city}</h1>`
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)


		cloud_pct.innerHTML = `<h3>Cloud_Pct is : ${response.cloud_pct}</h3>`
		feels_like.innerHTML = `<h3>Feels_Like is : ${response.feels_like}</h3>`
		humidity.innerHTML = `<h3>Humidity is : ${response.humidity}</h3>`
		sunrise.innerHTML = `<h3>Sunrise is : ${response.sunrise}</h3>`
		sunset.innerHTML = `<h3>Sunset is : ${response.sunset}</h3>`
		temp.innerHTML = `<h2>${response.temp}&#8451</h3>`
		wind_degrees.innerHTML = `<h3>Wind_Degrees is : ${response.wind_degrees}</h3>`
		wind_speed.innerHTML = `<h3>Wind_Speed is : ${response.wind_speed}</h3>`


		})
		.catch(err => console.error(err));
}	

getWeather("karachi")

let submit = document.getElementById('submit')
submit.addEventListener('click', (e)=>{
	e.preventDefault()
	getWeather(citySrch.value)
})