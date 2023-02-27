import React from 'react';
import './styles/BlueButton.css';

const BlueButton = ( {className, children, type}) => {
	return (
		<button
		className={`UI-button ${className}`} 
		type={type || 'button'}>
			{children}
		</button>
	);
};

export default BlueButton;
