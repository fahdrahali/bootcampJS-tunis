import React from 'react';

import Home from './home';
import Create from './create';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { location: 'home' };
	}

	render() {
		var page = <Home />;

		if (this.state.location === 'create') {
			page = <Create />;
		}

		return (
			<>
				<h2>Supper Appli</h2>
				{page};
			</>
		);
	}
}

export default App;
