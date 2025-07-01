import React, { useEffect, useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Result";

type ResultsState = {
  country: string;
  city: string;
  temperature: string;
  condition: string;
  icon: string;
}

const App = () => {

  const [city, setCity] = useState<string>("Tokyo");
  const [results, setResults] = useState<ResultsState>({
    country: "",
    city: "",
    temperature: "",
    condition: "",
    icon: ""
  })

  const getWeather =(e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    fetch(`${import.meta.env.VITE_WEATHER_API_URL}?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      setResults({
        country: data.location.country,
        city: data.location.name,
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon
      })
    })
  }

  useEffect(() => {
    getWeather();
  }, [])

  return (

    <div className="wrapper">
      <div className="container">
        <Title />
        <Form city={city} setCity={setCity} getWeather={getWeather} />
        <Results {...results} />
      </div>
    </div>
  )
}
export default App;
