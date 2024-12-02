import React from 'react';

const TextBox = ({ children }) => {
    return (
        <div style={styles.textBox}>
            <div style={styles.scrollableContent}>{children}</div>
        </div>
    );
};

const styles = {
    textBox: {
        backgroundColor: '#E0E9EB',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '90%',
        maxWidth: '800px',
        height: '50%', // Fixed height to ensure it fits below the heading
        overflowY: 'auto', // Scrollable content
        lineHeight: '1.6',
    },
    scrollableContent: {
        display: 'block',
    },
};

export default TextBox;
