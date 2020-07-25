import React, { Component } from "react";

import Grid from "./Grid";
import Toolbar from "./Toolbar";
import Links from "./Links";

class Main extends Component {
	constructor() {
		super();
		this.speed = 20;
		this.rows = 30;
		this.cols = 50;
		this.isGridActive = false;

		this.state = {
			generation: 0,
			gridClass: "",
			grid: Array(this.rows)
				.fill()
				.map(() => Array(this.cols).fill(false)),
		};
	}

	selectBox = (row, col) => {
		let gridCopy = JSON.parse(JSON.stringify(this.state.grid));
		gridCopy[row][col] = !gridCopy[row][col];

		this.setState({
			grid: gridCopy,
		});
	};

	toggleGrid = () => {
		const gridClass = this.isGridActive ? "" : "grid-active";
		this.isGridActive = !this.isGridActive;
		this.setState({
			gridClass: gridClass,
		});
	};

	clear = () => {
		let gridCopy = JSON.parse(JSON.stringify(this.state.grid));
		gridCopy.map((rows, i) =>
			rows.map((cols, j) => (gridCopy[i][j] = false))
		);

		this.setState({
			grid: gridCopy,
		});
	};

	seed = () => {
		let gridCopy = JSON.parse(JSON.stringify(this.state.grid));
		gridCopy.map((rows, i) =>
			rows.map((cols, j) =>
				Math.floor(Math.random() * 4) === 1
					? (gridCopy[i][j] = true)
					: (gridCopy[i][j] = false)
			)
		);

		this.setState({
			grid: gridCopy,
		});
	};

	playPauseButton = (isPlaying) => {
		isPlaying ? this.pauseButton() : this.playButton();
	};

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	};

	pauseButton = () => {
		clearInterval(this.intervalId);
	};

	play = () => {
		const grid = this.state.grid,
			numRow = grid.length,
			numCol = grid[0].length;
		let gridCopy = JSON.parse(JSON.stringify(this.state.grid));
		for (let i = 0; i < numRow; i++) {
			for (let j = 0; j < numCol; j++) {
				let count = 0;
				if (i > 0) if (grid[i - 1][j]) count++;
				if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++;
				if (i > 0 && j < numCol - 1) if (grid[i - 1][j + 1]) count++;
				if (j < numCol - 1) if (grid[i][j + 1]) count++;
				if (j > 0) if (grid[i][j - 1]) count++;
				if (i < numRow - 1) if (grid[i + 1][j]) count++;
				if (i < numRow - 1 && j > 0) if (grid[i + 1][j - 1]) count++;
				if (i < numRow - 1 && j < numCol - 1)
					if (grid[i + 1][j + 1]) count++;
				if (grid[i][j] && (count < 2 || count > 3))
					gridCopy[i][j] = false;
				if (!grid[i][j] && count === 3) gridCopy[i][j] = true;
			}
		}

		this.setState({
			grid: gridCopy,
			generation: this.state.generation + 1,
		});
	};

	save = () => {
		console.log(this.state.grid);
	};

	render() {
		return (
			<div>
				<Toolbar
					toggleGrid={this.toggleGrid}
					playPause={this.playPauseButton}
					clear={this.clear}
					seed={this.seed}
				/>
				<Grid
					grid={this.state.grid}
					gridClass={this.state.gridClass}
					selectBox={this.selectBox}
				/>
				{/* <h2>Generations:{this.state.generation}</h2> */}
				<Links />
			</div>
		);
	}
}

export default Main;
