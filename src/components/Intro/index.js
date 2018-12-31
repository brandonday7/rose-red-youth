import React, { Component } from "react";
import "./intro.css";
import "../DramaQueen/drama.css";
import machine from "../../images/machine.png";

class Intro extends Component {
	render() {
		return (
			<div className="drama-container">
				<h1 className="drama-heading">Intro</h1>
				<div className="dq-lyrics-container">
					<div className="dq-left-lyrics">
						<div className="verse">
							<p className="line">
								Thank you to all our friends and family for putting up with
								constant noise and coming to open mics and backyards to watch us
								have the most fun weve ever had
							</p>
						</div>
						<div className="verse">
							<p className="line">Art direction by Brandon Day</p>
							<p className="line">Drama Queen session video by Ethan Gans</p>
							<p className="line">
								Album art and photo editing by Ajay Rakrhaj
							</p>
							<p className="line">Arcade machines by Hailey Uens</p>
							<p className="line">CD cover animation by Kevin Lee</p>
						</div>
						<div className="verse">
							<p className="line">Thanks for doing all this for free</p>
						</div>
						<div className="verse">
							<p className="line">
								Intro written and recorded by Brandon Day Ethan Gans Nicholas
								Vereschak and Ryan Garbett Recording engineer Danny Paulson
								Produced by Danny Paulson Brandon Day Guitar and piano Nicholas
								Vereschak Drums Ryan Garbett French horn and bass guitar Danny
								Paulson Slide guitar Recorded in The Bedroom and The Living Room
								St Clair Avenue West Fall 2018
							</p>
						</div>
					</div>
					<img src={machine} className="machine-image" alt="Arcade" />
				</div>
			</div>
		);
	}
}

export default Intro;
