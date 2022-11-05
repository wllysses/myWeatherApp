import styled from "styled-components"
import { FiSearch } from 'react-icons/fi'
import { weatherService, weatherService2 } from "../../services/api"
import { useEffect, useState } from "react"

export const FormSearch = (props) => {
    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const currentHour = new Date().getHours()
    const currentMinute = new Date().getMinutes()
    const currentDay = new Date().getDate()

    const [input, setInput] = useState('brasília')
    const [weather, setWeather] = useState({
        temp: null,
        feelsLikeTemp: null,
        cityName: '',
        tempDescription: '',
        weatherIconCode: '',
        country: ''
    })

    useEffect(() => {
        async function fetchData() {
            const getWeather = await weatherService(input)
            const getWeather2 = await weatherService2(getWeather.coord.lat, getWeather.coord.lon)

            setWeather({
                temp: (getWeather2.current.temp).toFixed(1),
                feelsLikeTemp: (getWeather2.current.feels_like).toFixed(1),
                cityName: getWeather.name,
                tempDescription: getWeather2.current.weather[0].description,
                weatherIconCode: getWeather2.current.weather[0].icon,
                country: getWeather.sys.country
            })
            props.setWeatherData({
                humidity: getWeather2.current.humidity,
                pressure: getWeather2.current.pressure,
                windSpeed: getWeather2.current.wind_speed,
                sunrise: getWeather2.current.sunrise,
                sunset: getWeather2.current.sunset,
                uvi: getWeather2.current.uvi,
                clouds: getWeather2.current.clouds
            })
        }

        fetchData()
    }, [])

    async function handleChangeCity(e) {
        e.preventDefault()

        if(input === '') {
            alert('Preencha o campo.')
            return
        }

        const getWeather = await weatherService(input)
        const getWeather2 = await weatherService2(getWeather.coord.lat, getWeather.coord.lon)
       
        setWeather({
            temp: (getWeather2.current.temp).toFixed(1),
            feelsLikeTemp: (getWeather2.current.feels_like).toFixed(1),
            cityName: getWeather.name,
            tempDescription: getWeather2.current.weather[0].description,
            weatherIconCode: getWeather2.current.weather[0].icon,
            country: getWeather.sys.country
        })
        props.setWeatherData({
            humidity: getWeather2.current.humidity,
            pressure: getWeather2.current.pressure,
            windSpeed: getWeather2.current.wind_speed,
            sunrise: getWeather2.current.sunrise,
            sunset: getWeather2.current.sunset,
            uvi: getWeather2.current.uvi,
            clouds: getWeather2.current.clouds
        })

    }

    return (
        <FormSearchWrapper>
            <form onSubmit={handleChangeCity}>
                <input
                    type="text"
                    placeholder="Pesquisar cidade"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                />
                <button>
                    <FiSearch />
                </button>
            </form>

            <div className="currentInfos">
                <img src={`https://openweathermap.org/img/wn/${weather.weatherIconCode}@2x.png`} />
                <span>{weather.tempDescription}</span>
                <h1>{weather.temp}°</h1>
                <span><strong>{daysOfWeek[currentDay + 1]}</strong>, {currentHour}:{currentMinute < 10 ? '0' + currentMinute : currentMinute}</span>
            </div>

            <div className="localInfos">
                <span>Sensação térmica: {weather.feelsLikeTemp}°</span>

                <div className="local">
                    <h3>{weather.cityName}, {weather.country}</h3>
                </div>
            </div>
        </FormSearchWrapper>
    )
}

const FormSearchWrapper = styled.section`
    width: 30%;
    min-height: 100%;
    background: linear-gradient(to bottom, #4D99E7, #93BEEB);
    border-radius: 20px 0 0 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    color: white;

    form {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid white;
        border-radius: 5px;
        background-color: #fff;
        padding: 10px 20px;

        input {
            width: 80%;
            border: none;
            outline: none;
            font-size: 1.2rem;
        }

        button {
            border: none;
            background-color: #fff;
            outline: none;
            cursor: pointer;
            color: 
            black;
        }
    }

    .currentInfos {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        img {
            max-width: 100%;
        }

        h1 {
            font-size: 5rem;
            font-weight: 300;
        }
    }

    .localInfos {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;

            .local {
                padding: 20px;
                border: 2px solid white;
                border-radius: 20px;
            }
    }

    @media (max-width: 805px) {
        width: 100%;
        gap: 10px;
        border-radius: 20px 20px 0 0;
        padding: 20px;

        .currentInfos {
            flex-wrap: wrap;

            h1 {
                font-size: 2rem;
            }
        }
    }
`