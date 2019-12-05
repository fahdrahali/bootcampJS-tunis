import React from 'react';
import MaList from './liste';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, value: '', title: '' };
	}

	render() {
		const numbers =
			this.state.count > 0
				? new Array(this.state.count).fill(0).map((a, i) => i)
				: [];

		return (
			<>
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						this.setState({ count: this.state.count + 1 });
					}}
				>
					Click Me!
				</button>

				<input
					type="text"
					onChange={e => this.setState({ title: e.target.value })}
				></input>
				<p> vous avez cliqué {this.state.count} fois</p>
				<MaList numbers={numbers} title={this.state.title} />
			</>
		);
	}
}

export default App;
