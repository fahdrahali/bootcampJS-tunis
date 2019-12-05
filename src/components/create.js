import React from 'react';

class Create extends React.Component {
	render() {
		return (
			<div>
				<button>Retour</button>
				<br />
				<label>Nom :</label>
				<input type="text"></input>
				<br />
				<br />
				<label>Prenom :</label>
				<input type="text"></input>
				<br />
				<br />
				<button>Enregistrer</button>
			</div>
		);
	}
}

export default Create;
