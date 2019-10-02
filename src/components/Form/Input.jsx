import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <label className="field-label">
                <span className="label">{this.props.label}:</span>
                <input
                    className="input"
                    type={this.props.type}
                    name={this.props.name}
                />
            </label>
        )
    }
}

export default Input