import React from 'react';

import Home from './home';
import Create from './create';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import Container from '@material-ui/core/Container';
import Icons from './icons';

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
			<div>
				<AppBar position="static">
					<Toolbar>
						<Typography>
							<h2>Téléphone &nbsp;</h2>
						</Typography>

						<Icons small />

						{/* <Button color="inherit">Login</Button> */}
					</Toolbar>
				</AppBar>

				<Container maxWidth="sm">{page}</Container>
			</div>
		);
	}
}

export default App;
