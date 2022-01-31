import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: " ",
            second: " ",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            submit: this.state.first*0.5 + '; ' + this.state.second*0.5
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="first" type = "number" value={this.state.input} onChange={this.handleChange} />
                    <br />
                    <input name="second" type = "number" value={this.state.input} onChange={this.handleChange} />
                    <br />
                    <button type="submit">Submit!</button>
                </form>
                <h3> {this.state.submit}</h3>
            </div>
        )
    }
}

