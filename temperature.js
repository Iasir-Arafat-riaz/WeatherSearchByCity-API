const search = async () => {
  const input = document.getElementById("input");
  const inputValue = input.value;
  const key = "b70ab95d0ce6bc4c090e5b75b90bd42f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`;

  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))

  //using ASYNC
  const res = await fetch(url);
  const data = await res.json();
  weather(data);
  console.log(data);
};

const weather = (data) => {

  const weatherArea = document.getElementById("weatherArea");
  weatherArea.innerHTML = ` 
   
  <img class="image" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> 
    <h1>City: ${data.name}</h1>
    <h2>Country: ${data.sys.country}</h2>
    <h3><span>38.06</span>${data.main.temp}</h3>
    <h1 class="lead">${data.weather[0].description}</h1>
    <h4>Wind Speed : ${data.wind.speed}(${data.wind.deg}deg) </h4>
    `;
   
};

 