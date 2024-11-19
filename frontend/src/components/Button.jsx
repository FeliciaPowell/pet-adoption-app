import React from 'react';

const Button = ({ children, className, style, onClick }) => {
    return (
        <button
            className={`btn ${className || ''}`}
            style={{
                ...style,
                position: 'relative',
                width: '100%',
                height: '45px',
                border: '2px solid #000000',
                outline: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#fff',
                fontWeight: '600',
                backgroundColor: '#000000',
                overflow: 'hidden',
            }}
            onClick={onClick} // <-- Add the onClick prop here
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(224, 233, 235, 0.8)';
                e.currentTarget.style.borderColor = '#E0E9EB';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#000000';
            }}
        >
            {children}
        </button>
    );
};

export default Button;
