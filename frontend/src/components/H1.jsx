import React from 'react';

const H1 = ({ children, style = {} }) => {
    const defaultStyle = {
        fontSize: '3em',
        color: 'black',
        margin: 0,
        padding: '10px 0',
        fontFamily: 'Hammersmith One',
        marginTop: '150px',

        ...style,
    };

    return <h1 style={defaultStyle}>{children}</h1>;
};

export default H1;
