import React from 'react';
import GridBlock from './GridBlock';
import { useState } from 'react';

const Grid = () => {
	const [grid, setGrid] = useState([
		{ id: 1, src: '1', alt: '1' },
		{ id: 2, src: '2', alt: '2' },
		{ id: 3, src: '3', alt: '3' },
		{ id: 4, src: '4', alt: '4' },
		{ id: 5, src: '5', alt: '5' },
		{ id: 6, src: '6', alt: '6' },
		{ id: 7, src: '7', alt: '7' },
		{ id: 8, src: '8', alt: '8' },
		{ id: 9, src: '9', alt: '9' },
	]);

	// const createGrid = () => {
	// 	for (let i = 0; i < gridNumber; i++) {
	// 		setGridArray(...gridArray, <GridBlock />);
	// 	}
	// };

	// const shuffleGrid = (array) => {
	// 	for (let i = array.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[array[i], array[j]] = [array[j], array[i]];
	// 		console.log(array);
	// 		setGrid(array);
	// 	}
	// };

	// for (var i = 0; i < 9; i++) {
	// 	grid.push(<GridBlock key={GridBlock.id} />);
	// }

	return (
		<div className="grid">
			{grid.map((block) => {
				return (
					<div key={block.id}>
						<GridBlock src={block.src} />
					</div>
				);
			})}
		</div>
	);
};

export default Grid;
