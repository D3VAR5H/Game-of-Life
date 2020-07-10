import React, { PureComponent } from "react";

class Box extends PureComponent {
	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.col);
	};

	render() {
		return (
			<div
				className={this.props.selected ? "box on" : "box off"}
				onClick={this.selectBox}
			></div>
		);
	}
}

export default Box;
