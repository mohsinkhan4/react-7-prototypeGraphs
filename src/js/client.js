import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import store from "./store"

import MasterLayout from "./components/MasterLayout"
import MasterTableLayout from "./components/MasterTableLayout"
import ItemDetails from "./components/ItemDetails"
import Settings from "./components/Settings"

ReactDOM.render(
	<Provider store={store}>
		<Router history={ hashHistory }>
			<Route path="/" component={ MasterLayout } >
				<IndexRoute component={ MasterTableLayout } />
				<Route path="items(/:id)" component={ ItemDetails } />
				<Route key="settings" path="settings" component={ Settings } />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
