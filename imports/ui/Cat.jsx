import React, { Component } from 'react';

export default class Cat extends Component {
	cat() {
		alphabet = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z'
		];

		return alphabet.map((letter) => (
			<a className={letter == 'a' ? 'active' : null} href={letter}>{letter}</a>
		));
	}

	render() {
		return (
			<div id="cat">
				{this.cat()}
			</div>
		);
	}
}
