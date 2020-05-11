import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greeter extends Component {
    render() {
        return (
        <h1>Hello {this.props.name}</h1>
        );
    }
}

// Prop Validator
// Greeter.propTypes = {
//     name: PropTypes.string
// }

// Prop Validator
// isRequired을 사용할 경우 무조건 있어야함
Greeter.propTypes = {
    name: PropTypes.string.isRequired
}

// Prop Default Value
Greeter.defaultProps = {
    name: '둘리의 친구'
}

/*
기본형 Validator

PropTypes.string
PropTypes.number
PropTypes.boolean
PropTypes.object
PropTypes.func
PropTypes.array

조합형 Validator
PropTypes.oneOfTyoe     ex) PropTypes.oneOfType([PropTypes.string, PropTypes.number])
PropTypes.arrayOf       ex) PropTypes.arrayOfType(PropTypes.string)
PropTypes.objectOf      ex) PropTypes.objectOfType(PropTypes.string) : string 타입의 속성이 있는 객체
PropTypes.shape         ex) PropTypes.shape({
                                name: PropTypes.string,
                                price: PropTypes.number,
                                countOfStock: PropTypes.number,
                                isDiscount: PropTypes.boolean
                            })
*/

