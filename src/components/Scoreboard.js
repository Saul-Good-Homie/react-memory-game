import React from 'react';

const Scoreboard = ({ currentScore, highScore }) => {
	return (
		<div className="scoreboard">
			<h2>Current Score: {currentScore}</h2>
			<h3>High Score: {highScore} </h3>
		</div>
	);
};

export default Scoreboard;
