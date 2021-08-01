import React from 'react';
import Scoreboard from './Scoreboard';
import GridBlock from './GridBlock';
import { useState } from 'react';

const Grid = () => {
	const [grid, setGrid] = useState([
		{
			id: 1,
			src: require('../assets/Dusty_1.jpg').default,
			alt: 'Dusty on mountain',
			clicked: false,
		},
		{
			id: 2,
			src: require('../assets/Dusty_2.jpg').default,
			alt: 'Dusty on couch',
			clicked: false,
		},
		{
			id: 3,
			src: require('../assets/Dusty_3.jpg').default,
			alt: 'Dusty on rock',
			clicked: false,
		},
		{
			id: 4,
			src: require('../assets/Dusty_4.jpg').default,
			alt: 'Dusty on Kayak',
			clicked: false,
		},
		{
			id: 5,
			src: require('../assets/Dusty_5.jpg').default,
			alt: 'Dusty on gravel',
			clicked: false,
		},
		{
			id: 6,
			src: require('../assets/Dusty_6.jpg').default,
			alt: 'Dusty in front of mountain',
			clicked: false,
		},
		{
			id: 7,
			src: require('../assets/Dusty_7.jpg').default,
			alt: 'Dusty with orange toy',
			clicked: false,
		},
		{
			id: 8,
			src: require('../assets/Dusty_8.jpg').default,
			alt: 'Dusty with muddy ball',
			clicked: false,
		},
		{
			id: 9,
			src: require('../assets/Dusty_9.jpg').default,
			alt: 'Dusty with pinecone',
			clicked: false,
		},
	]);

	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const incrementCurrentScore = () => {
		setCurrentScore(currentScore + 1);
	};

	// if (currentScore > highScore) {
	// 	setHighScore(currentScore);
	// }

	const shuffleGrid = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
			setGrid(array);
		}
	};

	const clearClicked = () => {
		const newGrid = grid.map((block) => (block.clicked = false));
		setGrid(newGrid);
		console.log(grid);
	};

	const toggleClicked = (id) => {
		const newGrid = [...grid];
		const block = newGrid.find((block) => block.id === id);
		if (block.clicked === true) {
			console.log('already clicked, new game');
			if (currentScore > highScore) {
				setHighScore(currentScore);
				setCurrentScore(0);
				clearClicked(grid);
				shuffleGrid(grid);
			}
		} else {
			block.clicked = true;
			setGrid(newGrid);
			incrementCurrentScore();
			shuffleGrid(grid);
		}
	};

	return (
		<div>
			<Scoreboard currentScore={currentScore} highScore={highScore} />

			<div className="grid">
				{grid.map((block) => {
					return (
						<div key={block.id}>
							<GridBlock
								id={block.id}
								src={block.src}
								alt={block.alt}
								toggleClicked={toggleClicked}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Grid;
