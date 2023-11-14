import React, { useState } from "react";

const FormV1 = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submittedData, setSubmittedData] = useState(null);

	const submitForm = (e) => {
		e.preventDefault();
		console.log( {name,email,message})
		const formData = {
			name,
			email,
			message,
		};
		setSubmittedData(formData);
	};
	return (
		<div>
			<h2>Simple Form</h2>
			<form onSubmit={submitForm}>
				<label>
					Name:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Message:
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
			
			{submittedData && (
				<div>
					<h2>Submitted Data:</h2>
					<p>Name: {submittedData.name}</p>
					<p>Email: {submittedData.email}</p>
					<p>Message: {submittedData.message}</p>
				</div>
			)}
		</div>
	);
};

export default FormV1;