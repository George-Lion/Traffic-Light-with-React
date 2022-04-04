import React from "react";
import PropTypes from "prop-types";

const TrafficLight = (props) => {
	return (
		<div>
			<div className="palo  justify-content-center"></div>
			<div
				className="card"
				style={{ width: "9rem" }}
				onClick={() => {
					{
						props.icon;
					}
					setLuz("red");
					{
						props.icon2;
					}
					{
						props.icon3;
					}
				}}></div>
		</div>
	);
};

TrafficLight.propTypes = {
	icon: PropTypes.object,
	icon2: PropTypes.object,
	icon3: PropTypes.object,
};

export default TrafficLight;
