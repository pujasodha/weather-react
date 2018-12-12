import React from 'react';
import './form.css'

class Form extends React.Component {
    render() {
        return(
            <div>
            <div className = 'form-group'>
                <form onSubmit = {this.props.getWeather}>
                    <input type ='text' id = 'city' name ='city' placeholder = 'Enter City'/> <br />
                    <input type='text' id='country' name='country' placeholder='Enter Country'/> <br />
                    <button>
                        Get Weather
                    </button>
                </form>
            </div>
            </div>
        )
    }
}

export default Form;