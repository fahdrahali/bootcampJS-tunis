import React from 'react';
import './app.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icons from './icons';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: undefined };
	}

	componentDidMount() {
		fetch('https://demo.levitt.fr/designations')
			.then(res => res.json())
			.then(json => this.setState({ data: json }));
	}

	render() {
		if (this.state.data) {
			var message = (
				<Paper>
					<div>
						<Table aria-label="simple table">
							<TableHead className="header-table">
								<TableRow>
									<TableCell align="right">Id</TableCell>
									<TableCell>Designation</TableCell>
									<TableCell align="right">phoneNumber</TableCell>

									<TableCell align="right">attribution</TableCell>
									<TableCell align="right">observation</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.state.data.map(row => (
									<TableRow key={row.id}>
										<TableCell component="th" scope="row">
											{row.id}
										</TableCell>
										<TableCell align="right">{row.designation}</TableCell>
										<TableCell align="right">{row.phoneNumber}</TableCell>
										<TableCell align="right">{row.attribution}</TableCell>
										<TableCell align="right">{row.observation}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</Paper>
			);
		}

		return (
			<div>
				<p>Hello World !</p>

				<button className="button-home">création utilisateur</button>
				<br />

				<br />
				<button className="button-home">contact</button>
				<br />
				<br />
				<p>{message}</p>
			</div>
		);
	}
}
export default Home;
