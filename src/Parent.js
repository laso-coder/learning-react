import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [childData, setChildData] = useState('');
	const dataToSendToChild = 'Hello from parent!';

	// Callback function to receive data from ChildComponent
	const receiveDataFromChild = (dataFromChild) => {
		// Handle data received from the child component
		setChildData(dataFromChild);
	};

	return (
		<div>
			<p>Data received from child: {childData}</p>
			{/* Pass data to ChildComponent */}
			<Child
				sendDataToParent={receiveDataFromChild}
				dataFromParent={dataToSendToChild}
			/>
		</div>
	);
};

export default Parent;