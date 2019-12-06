import React from 'react';

import Home from './home';
import Create from './create';
import Badge from '@material-ui/core/Badge';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

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
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography>
							<h2>Supper Appli</h2>
						</Typography>
						{/* <Button color="inherit">Login</Button> */}
					</Toolbar>
				</AppBar>

				<Container maxWidth="sm">{page}</Container>
			</div>
		);
	}
}

export default App;
