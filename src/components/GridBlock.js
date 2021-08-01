import React from 'react';

const GridBlock = ({ src, alt, id, toggleClicked }) => {
	const handleClick = () => {
		toggleClicked(id);
	};

	return (
		<div className="section flex" onClick={handleClick}>
			<div>
				<img src={src} className="card-image" alt={alt} />
			</div>
		</div>
	);
};

export default GridBlock;
