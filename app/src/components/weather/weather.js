import React from 'react';
import './weather.css'
class Weather extends React.Component {

    render  () {
        return (
            <div className = 'weather-display'>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>} {"\n"}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>} {"\n"}
                {this.props.description && <p>Conditions: {this.props.description}</p>} {"\n"}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

export default Weather