import React from 'react';
import StockMountain from '../assets/stock-mountain-photo.jpeg';
import { useState } from 'react';
//import {incrementCurrentScore} from "./Scoreboard"

const GridBlock = (props) => {
	const [clicked, setClicked] = useState(false);

	const clickTile = () => {
		setClicked(true);
		console.log(clicked);
		//incrementCurrentScore;
	};

	return (
		<div className="section flex" onClick={clickTile}>
			<div>
				<img
					src={StockMountain}
					className="card-image"
					alt="Mountain from the sky"
				/>
			</div>
			<h3>src: {props.src}</h3>
		</div>
	);
};

export default GridBlock;
