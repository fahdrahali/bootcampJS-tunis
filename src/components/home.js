import React from 'react';
import './app.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: undefined };
	}

	componentDidMount() {}

	render() {
		var message = <div>Les données ...</div>;
		if (this.state.data) {
			message = (
				<ul>
					{this.state.data.map(e => (
						<li>{e.id}</li>
					))}
				</ul>
			);
		}

		return (
			<div>
				<button
					onClick={() => {
						fetch('https://demo.levitt.fr/designations')
							.then(res => res.json())
							.then(json => this.setState({ data: json }));
					}}
				>
					Charger les données
				</button>
				<p>Hello World !</p>
				<button className="button-home">création utilisateur</button>
				<br />
				<p>{message}</p>
				<br />
				<button className="button-home">contact</button>
			</div>
		);
	}
}

export default Home;
