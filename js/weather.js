window.addEventListener('load',()=>{

    console.log('Inicializando scrip de clima...');

    //variables
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cordoba?unitGroup=metric&key=8F3GYEZDMZ5EB5WP2966PFYGA&contentType=json";
    const currentTemp = document.querySelector('.info__temp');
    const currentLocation = document.querySelector('.info__location');
    const iconWeather = document.querySelector('#icon-weather');
    console.log(currentTemp);
    let responseWeather;
    const iconsObj = {
        "cloudy":'/assets/img/cloud.png',
        "clear-day":'',
        "rain":"/assets/img/icons8-lluvia-48.png"
    } 

    //funciones
    // const getInfoWeather =  () => {

    // }
    const printTemp = () =>{
        console.log(currentTemp.children[0],currentLocation.children[1]);
        currentTemp.children[0].innerHTML = `${responseWeather.currentConditions.temp}°`;
        currentTemp.children[1].innerHTML = `${responseWeather.days[0].tempmax}°/${responseWeather.days[0].tempmin}°`;
        currentLocation.children[0].innerHTML = responseWeather.resolvedAddress;
        currentLocation.children[1].innerHTML = `${new Date().toDateString()}`;
        iconWeather.src=iconsObj[responseWeather.currentConditions.icon];
    }

    //eventos

    //ejecuciones inmediatas
    fetch(url)
        .then( response=>response.json() ) //parseo a objeto literal con .json()
        .then( (data)=>{
            console.log(data);
            responseWeather = data;
            printTemp();
        }) //guardo ese parseo en data
        .catch( error=>console.error(error) )

});