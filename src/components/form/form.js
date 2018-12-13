import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

class Form extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    render() {
        const { props } = this;
        return (
            <form className="form" onSubmit={props.onSubmit}>
                <input type="text" id="city" name="city" placeholder="Enter City" />

                <input type="text" id="country" name="country" placeholder="Enter Country" />

                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;
