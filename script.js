const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '051c8001bamshf94de3dfaca0b60p1f15e8jsn3dceb896bb65',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));