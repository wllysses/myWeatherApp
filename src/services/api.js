const apiKey = '25979f21edc1a700ac50e6b448be37c1'

export async function weatherService(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=pt_br&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    return await response.json()
}

export async function weatherService2(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?appid=a5bb4718b30b6f58f58697997567fffa&lang=pt_br&exclude=minutely&units=metric&lon=${lon}&lat=${lat}`
    const response = await fetch(url)
    const data = await response.json()
    return await data
}