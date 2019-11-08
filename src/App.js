import React, { Component } from 'react';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        error: undefined,
    };

    //call the api data
    getWeather = async (e) => {
        // prevent page from reloading when button is pressed
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${
                process.env.REACT_APP_WEATHER_API_KEY
            }&units=imperial`
        );

        const { cod, main, name, sys, weather, wind } = await response.json();

        if (city && country && cod === 200) {
            this.setState({
                temperature: main.temp,
                city: name,
                country: sys.country,
                humidity: main.humidity,
                wind: wind.speed,
                description: weather[0].description,
                error: '',
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                wind: undefined,
                description: undefined,
                error:
                    city || country
                        ? 'Location not found. Check your spelling!'
                        : 'Please Enter a City & Country',
            });
        }
    };

    render() {
        return (
            <div className="App">
                <Title />
                <Weather {...this.state} />
                <Form onSubmit={this.getWeather} />
            </div>
        );
    }
}

export default App;
