import React, { Component, PropTypes } from 'react'

class AddValue extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, updateValue
            , onDecrement } = this.props;
        return (
            <div>
            <p>{value}</p>
            <input type="text" onChange={this.handleChange} />
            <button onClick={updateValue}>
                +
            </button>
            {' '}
            <button onClick={onDecrement}>
                -
            </button>
        </div>
    )
}
}

AddValue.propTypes = {
    value: PropTypes.array.isRequired,
    updateValue: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default AddValue