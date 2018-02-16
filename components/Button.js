import React from 'react';
import PropTypes from 'prop-types';
import {
    asset,
    Image, 
    VrButton
  } from 'react-vr';

const Button = (props) => {
    return (
        <VrButton style={props.style}
                    onClick={props.onClick}>
            <Image style={{width:2, height:2}}
                source={asset(props.sourceUrl)}
                    inset={[0.2,0.2,0.2,0.2]}
                        insetSize={[0.05,0.45,0.55,0.15]} >
            </Image>
        </VrButton>
    );
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired,
    sourceUrl:PropTypes.string.isRequired,
    className: PropTypes.string
}