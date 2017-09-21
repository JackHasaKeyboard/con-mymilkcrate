import React, { Component } from 'react';

export default class Track extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		};

		this.changeTrack = this.changeTrack.bind(this);
	}

	changeTrack(index) {
		this.setState({index: index}, function() {
			$('li a').attr('id', '');
			$('li:eq(' + this.state.index + ') a').attr('id', 'active');
		});
	}

	music() {
		music = {
			artist: "Run the Jewels",
			name: "RTJ2",
			tracks: [
				"Jeopardy",
				"Oh My Darling Don't Cry",
				"Blockbuster Night Part 1",
				"Close Your Eyes (And Count to F-ck) [feat. Zack de la Rocha]",
				"All My Life",
				"Lie, Cheat, Steal",
				"Early (feat. BOOTS)",
				"All Due Respect (feat. Travis Barker)",
				"Love Again (Akinyele Back)",
				"Crown (feat. Diane Coffee)",
				"Angel Duster"
			]
		}

		return (
			music.tracks.map((track, i) => (
				<li><a onClick={() => {this.changeTrack(i)}} id={i == 0 ? "active" : null}>{track}</a></li>
			))
		)
	}

	render() {
		return (
			<ul>
				{this.music()}
			</ul>
		);
	}
}
