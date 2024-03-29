import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createTheme from '@material-ui/core/styles/createTheme';
import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';

const theme = createTheme({
	palette: {
		primary: {
			light: '#33c9dc',
			main: '#FF5722',
			dark: '#d50000',
			contrastText: '#fff'
		}
  }
});

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={home} />
						<Route exact path="/login" component={login} />
						<Route exact path="/signup" component={signup} />
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
