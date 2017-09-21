import React, { Component } from 'react';

export default class Suggestion extends Component {
	suggestion() {
		suggestion = [
			{
				artist: "Perfume Genius",
				name: "Too Bright",
			},
			{
				artist: "The Go! Team",
				name: "Rolling Blackouts",
			},
			{
				artist: "Deftones",
				name: "Gore",
			},
			{
				artist: "Atari Teenage Riot",
				name: "1995",
			},
			{
				artist: "Cut Copy",
				name: "Zonoscope",
			},
			{
				artist: "Django Django",
				name: "First Light",
			}
		]

		return suggestion.map((album) => (
			<a>
				<img src={"/img/" + album.artist.toLowerCase() + " - " + album.name.toLowerCase() + ".png"} />
				<div>
					<h5>{album.name}</h5>
					<h6>{album.artist}</h6>
				</div>
			</a>
		))
	}

	render() {
		return <div id="foot">
			{this.suggestion()}
		</div>
	}
}
