import React, { PureComponent } from "react";

class Toolbar extends PureComponent {
	render() {
		return (
			<div>
				<button onClick={this.props.play}>Play</button>
				<button onClick={this.props.pause}>Pause</button>
				<button onClick={this.props.clear}>Clear</button>
				<button onClick={this.props.seed}>Seed</button>
			</div>
		);
	}
}

export default Toolbar;
