import React, { useState } from "react";

const Home = () => {
	const [lights, setLights] = useState(null);

	return (
		<div>
			<div className="stick container"></div>
			<div className="box container justify-content-center bg-black">
				<div
					onClick={() => {
						setLights("red");
					}}
					className={
						"cercle bg-danger container " +
						(lights === "red" ? "on" : null)
					}></div>
				<div
					onClick={() => {
						setLights("yellow");
					}}
					className={
						"cercle bg-warning container " +
						(lights === "yellow" ? "on" : null)
					}></div>
				<div
					onClick={() => {
						setLights("green");
					}}
					className={
						"cercle bg-success container " +
						(lights === "green" ? "on" : null)
					}></div>
			</div>
		</div>
	);
};

export default Home;
