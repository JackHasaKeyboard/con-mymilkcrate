import React, { Component } from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default class Disp extends Component {
	render() {
		return (
			<div id="head">
				<h1>
					<svg overflow="visible" width="20px" height="20px">
						<g fill="none" stroke="black" strokeWidth="2" shapeRendering="crispEdges">
							<path d="M 20,0 L 0,0 L 0,10"></path>
							<path d="M 26,6 L 6,6 L 6,16"></path>
							<path d="M 32,22 L 32,12 L 12,12 L 12,22"></path>
						</g>
					</svg>
					<span>mymilkcrate</span>
				</h1>
				<svg id="bag" overflow="visible" width="20px" height="20px">
					<g fill="none" stroke="black" strokeWidth="2">
						<path d="M 0,0 V 10 H 20 V 0"></path> 
						<path d="M 0,10 C 0,10 10,0 20,10"></path> 
					</g>
				</svg>
			</div>
		)
	}
}
