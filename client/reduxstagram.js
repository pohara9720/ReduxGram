// let's go!

import React from "react";
import ReactDOM from "react-dom"
import css from "./styles/style.styl";
import Main from "./Components/Main.js";
import Single from "./Components/Single.js";
import Grid from "./Components/Grid.js";
import App from "./Components/App.js"
import { Router,Route,IndexRoute, browserHistory} from "react-router"

import { Provider } from "react-redux"

import store, { history } from "./store.js"

const router = (
<Provider store={store}>
	<Router history={history}>
	<Route path="/" component={App}>
		<IndexRoute component={Grid}></IndexRoute>
		<Route path="/view/:postId" component={Single}></Route>
	</Route>
	</Router>
</Provider>	
	)



ReactDOM.render(router , document.getElementById('root'));


