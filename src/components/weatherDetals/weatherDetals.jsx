import styled from "styled-components"

export const WeatherDetals = (props) => {

    const sunrise = new Date(props.weatherData.sunrise * 1000)
    const sunset = new Date(props.weatherData.sunset * 1000)

    return (
        <DetalsWrapper>

            <div className="weatherHighlitghts">
                <div className="highlights">
                    <div className="highlitghtCard">
                        <h4>Umidade</h4>
                        <img src="https://hweather.netlify.app/weather_icons/humidity.png" alt="Humidity icon" />
                        <span>{props.weatherData.humidity}%</span>
                    </div>
                    <div className="highlitghtCard">
                        <h4>Pressão</h4>
                        <img src="https://hweather.netlify.app/weather_icons/pressure.png" alt="Pressure icon" />
                        <span>{props.weatherData.pressure}hPa</span>
                    </div>
                    <div className="highlitghtCard">
                        <h4>Vel. Vento</h4>
                        <img src="https://hweather.netlify.app/weather_icons/wind-night.png" alt="Wind Speed icon" />
                        <span>{props.weatherData.windSpeed}m/s</span>
                    </div>
                    <div className="highlitghtCard">
                        <h4>Nuvens</h4>
                        <img src="https://hweather.netlify.app/weather_icons/clouds.png" alt="Wind Speed icon" />
                        <span>{props.weatherData.clouds}%</span>
                    </div>
                    <div className="highlitghtCard">
                        <h4>Índ. Ultravioleta</h4>
                        <img src="https://hweather.netlify.app/weather_icons/uv.png" alt="Wind Speed icon" />
                        <span>{props.weatherData.uvi}</span>
                    </div>
                    <div className="highlitghtCard">
                        <div className="sunrise">
                            <img src="https://hweather.netlify.app/weather_icons/sunrise.png" alt="" />
                            <div className="sunriseData">
                                <h4>{sunrise.getHours()}:{sunrise.getMinutes()} AM</h4>
                                <span>Sunrise</span>
                            </div>
                        </div>
                        <div className="sunset">
                            <img src="https://hweather.netlify.app/weather_icons/sunset.png" alt="" />
                            <div className="sunsetData">
                                <h4>{sunset.getHours()}:{sunset.getMinutes()} PM</h4>
                                <span>Sunset</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DetalsWrapper>
    )
}

const DetalsWrapper = styled.section`
    width: 70%;
    min-height: 100%;
    background-color: #f6f6f8;
    border-radius: 0 20px 20px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 20px;

    .weatherHighlitghts {
        width: 100%;

        .highlights {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

            .highlitghtCard {
                max-width: 350px;
                width: 100%;
                height: 180px;
                background-color: #fff;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 10px;
                box-shadow: 0 3px 6px #0000001f;

                img {
                    max-width: 20%;
                }
            }
        }

        .sunrise, .sunset {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        //responsividade
        @media (max-width: 1090px) {
            .highlights {
                .highlitghtCard {
                    max-width: 200px;
                }
            }
        }
    }
    @media (max-width: 805px) {
        width: 100%;
        border-radius: 0 0 20px 20px;
    }

`