import React from "react";

import Box from "./Box";

function Grid(props) {
	const { grid, selectBox, gridClass } = props;
	return (
		<div
			className="grid"
			style={{
				display: `grid`,
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
				gridTemplateColumns: `repeat(${grid[0].length},15px)`,
			}}
		>
			{grid.map((rows, i) =>
				rows.map((cols, j) => (
					<Box
						key={`${i}-${j}`}
						selected={grid[i][j]}
						row={i}
						col={j}
						selectBox={selectBox}
						gridClass={gridClass}
					/>
				))
			)}
		</div>
	);
}

export default Grid;
