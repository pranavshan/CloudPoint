import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react'
import './SearchBox.css'

export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "32066da2def3deae9ffbdf9cf61dd435"

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse  = await response.json();
            let result  = {
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err){
            throw(err);
        }
        
    }

    let handleChange = async(event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            
        }
        catch(err){
          setError(true);
        }
        
    }

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}
