import React from "react";

const Child = (props) => {
	// Function to send data to the parent component
	const sendDataToParent = () => {
		const data = 'Hello from child!';
		// Call the callback function passed from the parent with the data
		props.sendDataToParent(data);
	};
	return (
		<div>
			<p>Data received from parent: {props.dataFromParent}</p>
			<button onClick={sendDataToParent}>Send Data to Parent</button>
		</div>);

};

export default Child;