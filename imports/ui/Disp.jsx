import React, { Component } from 'react';
import { render } from 'react-dom';

import Shelf from './Shelf.jsx';

import Record from './Record.jsx';
import Track from './Track.jsx';
import Ctrl from './Ctrl.jsx';
import Suggestion from './Suggestion.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default class Disp extends Component {
	constructor(props) {
		super(props);
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
			{
				title: music.artist + " - " + music.name,
				track: music.tracks.map((track, i) => (
					<li><a id={i == 0 ? "active" : null}>{track}</a></li>
				))
			}
		)
	}

	render() {
		return (
			<div>
				<h2>{this.music().title}</h2>

				<div id="album">
					<div id="showcase">
						<div id="img">
							<img id="cover" src={"/img/" + this.music().title.toLowerCase() + ".png"} />
							<img className="vinyl" src="/img/vinyl.png" />
							<img className="vinyl" src="/img/vinyl.png" />
						</div>

						<div id="package">
							<img src="/img/stickers.png" />

							<div>
								<h6>Disc 1</h6>
								<img src="/img/vinyl.png" />
								<li>10 in</li>
							</div>

							<div>
								<h6>Disc 2</h6>
								<img src="/img/vinyl.png" />
								<li>10 in</li>
							</div>

							<div id="art">
								<div>
									<img src={"/img/" + this.music().title.toLowerCase() + ".png"} />
									<img src="/img/back.png" />
								</div>
								<div>
									<img src="/img/gatefold.png" />
								</div>
							</div>

							<Record />

							<Ctrl />
						</div>

					</div>
					<Track />
				</div>

				<Suggestion />
			</div>
		)
	}
}
