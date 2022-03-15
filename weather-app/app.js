//variables
const form = document.querySelector('section.top-banner form');
const input = document.querySelector('div.container input');
const msg = document.querySelector('form .msg');
const cityListUl = document.querySelector('.cities');

localStorage.setItem(
    'apiKey',
EncryptStringAES('139bbdfedde787462135db3b972d7216')
);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getDataFromWeatherApi();
});

const getDataFromWeatherApi = async ()=>{
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    let q = input.value;
    let appid = DecryptStringAES(localStorage.getItem('apiKey'))
    let units = 'metric'
    let urlApi = `${baseUrl}q=${q}&appid=${appid}&units=${units}`

    try {
        const response = await axios(urlApi);
        const {name: cityName,
             main : {temp : cityTemp},
             sys: {country : citySys},
            weather 
        } = response.data
        const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

//
        let cityCardList = cityListUl.querySelectorAll(".myCity");
        let cityCardListArray = Array.from(cityCardList);

        if(cityCardListArray.length > 0){
            const filteredArray = cityCardListArray.filter(card => card.querySelector(".city-name span").innerText == cityName);
            if(filteredArray.length > 0){
                msg.innerText = `You already know the weather for ${cityName}, Please search for another city 😉`;
                setTimeout(()=>{
                    msg.innerText = "";
                }, 5000);
                form.reset();
                input.focus();
                return;
            }
        }
//



        let createdCityLi = document.createElement('li')
        createdCityLi.classList.add('myCity')
        createdCityLi.innerHTML = 
        `
        <div class='city-container'>
        <h2 class="city-name" data-name="${cityName}, ${citySys}">
            <span>${cityName}</span>
            <sup>${citySys}</sup>
        </h2>
        <div class="city-temp">
            ${Math.round(cityTemp)}<sup>°C</sup>
        </div>
        <figure>
            <img class="city-icon" src="${iconUrl}">
            <figcaption>
                ${weather[0].description}
            </figcaption>
        </figure>
        </div>
        `
        cityListUl.prepend(createdCityLi);
        form.reset();
        input.focus();
        
    } catch (error) {
        msg.innerHTML = error
        setTimeout(() => {
            msg.innerText = "";
          }, 5000);
    }
}
