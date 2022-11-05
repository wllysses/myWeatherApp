import { useState } from "react"
import styled from "styled-components"
import { FormSearch } from "../components/formSearch/FormSearch"
import { WeatherDetals } from "../components/weatherDetals/weatherDetals"

export const Home = () => {

    const [weatherData, setWeatherData] = useState({
        humidity: '',
        pressure: '',
        windSpeed: '',
        sunrise: '',
        sunset: '',
        uvi: '',
        clouds: ''
    })

    return (
        <Wrapper>
            <FormSearch setWeatherData={setWeatherData} />
            <WeatherDetals weatherData={weatherData}/>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    max-width: 1200px;
    width: 100%;
    background-color: #fff;
    min-height: 650px;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.206);
    display: flex;

    @media (max-width: 805px) {
        flex-direction: column;
    }
`