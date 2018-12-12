import React, { Component } from 'react';
import Title from './components/title'
import Form from './components/form';
import Weather from './components/weather';
import "./App.css"


class App extends Component {

  //initalize the state 
    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined,
    }
  //call the api data
  getWeather = async(e) => {

    // prevent page from reloading when button is pressed
    e.preventDefault();

    // get city from user 
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
    const data = await apiCall.json();
    console.log(data)

    if( city && country) {
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      error: ""
    })
  } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please Enter a City & Country"
      })
  }
  }


render() {
  return (
    <div className = 'App'>
      <Title />
        <Form getWeather = {this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          description = {this.state.description}
          error = {this.state.error}
        /> 
    </div>
  )
}
}

export default App;
