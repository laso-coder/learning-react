import React, { Component } from 'react';

class FormV2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			submittedData: null,
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			submittedData: {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message,
			},
		});
	};

	render() {
		const { name, email, message, submittedData } = this.state;

		return (
			<div>
				<h2>Simple Form</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={name}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={email}
							onChange={this.handleChange}
						/>
					</label>
					<br />
					<label>
						Message:
						<textarea
							name="message"
							value={message}
							onChange={this.handleChange}
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
	}
}

export default FormV2;