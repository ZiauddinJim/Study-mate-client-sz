import React from 'react';

const Container = ({ children, className }) => {
    return (
        <div className={`mx-auto container ${className}`}>
            {children}
        </div>
    );
};

export default Container;