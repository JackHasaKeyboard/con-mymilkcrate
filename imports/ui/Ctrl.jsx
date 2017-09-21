import React, { Component } from 'react';

export default class Disp extends Component {
	tog() {
		$('#tog').attr('class') == 'fa fa-play' ? $('#tog').attr('class', 'fa fa-pause') : $('#tog').attr('class', 'fa fa-play')
	}

	render() {
		return (
			<div id="ctrl">
				<i onClick={this.tog} id="tog" className="fa fa-play"></i>
			</div>
		)
	}
}
