import React, { PureComponent } from "react";

class Toolbar extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isPlaying: false,
		};
	}

	playPauseClickHandler = () => {
		this.props.playPause(this.state.isPlaying);
		this.setState({
			isPlaying: !this.state.isPlaying,
		});
	};

	render() {
		return (
			<div className="controls">
				<h1>Game of Life</h1>
				<button onClick={this.props.toggleGrid}>Toggle Grid</button>
				<button onClick={this.playPauseClickHandler}>
					{this.state.isPlaying ? "Pause" : "Play"}
				</button>
				<button onClick={this.props.clear}>Clear</button>
				<button onClick={this.props.seed}>Seed</button>
			</div>
		);
	}
}

export default Toolbar;
