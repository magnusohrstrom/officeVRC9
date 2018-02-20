import React from 'react';
import PropTypes from 'prop-types';
import {
    asset,
    VrButton
  } from 'react-vr';

const Button = (props) => {
    return (
        <VrButton style={props.style}
                    onClick={props.onClick}>
        </VrButton>
    );
}

export default Button;

Button.propTypes = {
    className: PropTypes.string
}