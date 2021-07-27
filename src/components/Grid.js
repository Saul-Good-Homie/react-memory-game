import React from 'react';
import GridBlock from './GridBlock';
import { useState } from 'react';

const Grid = () => {
	// const createGrid = () => {
	// 	for (let i = 0; i < gridNumber; i++) {
	// 		setGridArray(...gridArray, <GridBlock />);
	// 	}
	// };

	// const shuffleArray = (array) => {
	// 	for (let i = array.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[array[i], array[j]] = [array[j], array[i]];
	// 		console.log(array);
	// 		setGridArray(array);
	// 	}
	// };

	let grid = [];
	for (var i = 0; i < 9; i++) {
		grid.push(<GridBlock key={GridBlock.id} />);
	}

	return <div className=" grid">{grid}</div>;
};

export default Grid;
