import React from 'react';
import StockMountain from '../assets/stock-mountain-photo.jpeg';
import { useState } from 'react';
//import {incrementCurrentScore} from "./Scoreboard"

const GridBlock = () => {
	const [clicked, setClicked] = useState(false);

	const clickTile = () => {
		setClicked(true);
		console.log(clicked);
		//incrementCurrentScore;
	};

	const id = Math.floor(Math.random() * 100) + 1;

	return (
		<div className="section flex" onClick={clickTile}>
			<div>
				<img
					src={StockMountain}
					className="card-image"
					alt="Mountain from the sky"
				/>
			</div>
			<h3>ID: {id}</h3>
		</div>
	);
};

export default GridBlock;
