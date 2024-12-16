import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import {useState} from 'react'
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 31.32,
        humidity: 74,
        temp: 28.05,
        tempMin: 28.05,
        weather: "haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); 
    }

    return (
        <div><h2>Cloud Point</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        </div>
    )

}