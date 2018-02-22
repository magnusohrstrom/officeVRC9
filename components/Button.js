import React from 'react';
import PropTypes from 'prop-types';
import {
    asset,
    VrButton,
    Image
  } from 'react-vr';

const Button = (props) => {
    return (
        <VrButton style={props.buttonStyle}
                    onClick={props.onClick}>
            <Image source={props.sourceUrl} style={props.imageStyle}/>
        </VrButton>
    );
}

export default Button;

Button.propTypes = {
    className: PropTypes.string
}