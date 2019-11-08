import React from 'react';
import './weather.css';
class Weather extends React.Component {
    render() {
        return (
            <div className="weather-display">
                <div className="weather">
                    {this.props.city && this.props.country && (
                        <p>
                            Location: {this.props.city}, {this.props.country}
                        </p>
                    )}{' '}
                    {'\n'}
                    {this.props.temperature && (
                        <p>Temperature: {this.props.temperature} degrees Fahrenheit</p>
                    )}{' '}
                    {'\n'}
                    {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>} {'\n'}
                    {this.props.wind && <p>Wind: {this.props.wind}%</p>} {'\n'}
                    {this.props.description && <p>Conditions: {this.props.description}</p>} {'\n'}
                    {this.props.error && <p>{this.props.error}</p>}
                </div>
            </div>
        );
    }
}

export default Weather;
