import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Head from '../imports/ui/Head.jsx';
import Cat from '../imports/ui/Cat.jsx';

import Shelf from '../imports/ui/Shelf.jsx';
import Disp from '../imports/ui/Disp.jsx';
import Prof from '../imports/ui/Prof.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

Meteor.startup(() => {
	render(
		<div>
			<Head />

			<BrowserRouter>
				<Switch>
					<Route path="/shelf" component={Shelf} />
					<Route path="/disp" component={Disp} />
					<Route path="/prof" component={Prof} />
				</Switch>
			</BrowserRouter>
		</div>,
		document.querySelector('body')
	);
});
