import React from 'react';

class MaListe extends React.Component {
	render() {
		const data = this.props.numbers.map(n => <li key={n}>{`element ${n}`}</li>);
		return (
			<>
				<ul>
					<h1>{this.props.title}</h1>
				</ul>
				<ul>{data}</ul>
			</>
		);
	}
}

/*const MaListe = () => {
	return (
		<div className="liste">
			<h1>Ma Liste</h1>
			<ul>
				<li>element 1</li>
				<li>element 2</li>
			</ul>
		</div>
	);
};*/

export default MaListe;
