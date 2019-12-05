import React from 'react';

class Contact extends React.Component {
	render() {
		return (
			<div>
				<label>Titre :</label>
				<input type="text"></input>
				<br />
				<br />
				<label>Message :</label>
				<input type="text"></input>
				<br />
				<br />
				<button>Enregistrer</button>
			</div>
		);
	}
}

export default Contact;
