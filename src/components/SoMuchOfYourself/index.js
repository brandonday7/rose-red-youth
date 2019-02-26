import React, { Component } from "react";
import "../DramaQueen/drama.css";

class SoMuchOfYourself extends Component {
	render() {
		return (
			<div className="carousel-child">
				<h1 className="drama-heading">So Much of Yourself</h1>
				<div className="dq-lyrics-container">
					<div className="dq-lyrics">
						<div className="verse left-padding">
							<p className="line">You're a liar,</p>
							<p className="line">I believe,</p>
							<p className="line">You don't wanna be here,</p>
							<p className="line">Then leave</p>
						</div>
						<div className="verse left-padding">
							<p className="line">You think too much of yourself,</p>
							<p className="line">You think too much of yourself</p>
						</div>
						<div className="verse left-padding">
							<p className="line">And when you cry,</p>
							<p className="line">They apologize,</p>
							<p className="line">Isn't that nice?</p>
							<p className="line">You're biding time,</p>
							<p className="line">You're spilling mine,</p>
							<p className="line">Do you mind?</p>
						</div>
						<div className="verse left-padding">
							<p className="line">You're a loner,</p>
							<p className="line">Or is it just me,</p>
							<p className="line">You don't phone,</p>
							<p className="line">And they won't make a scene</p>
						</div>
					</div>
					<div className="machine-container">
						<img src={`${process.env.REACT_APP_BUCKET}smoy.png`} className="machine-image" alt="Arcade" />
					</div>
					<div className="dq-lyrics">
						<div className="verse left-padding">
							<p className="line">You think so much of yourself,</p>
							<p className="line">You think so much of yourself,</p>
						</div>
						<div className="verse left-padding">
							<p className="line">And when you cry,</p>
							<p className="line">They apologize,</p>
							<p className="line">Isn't that nice?</p>
							<p className="line">You're biding time,</p>
							<p className="line">You're killing mine,</p>
							<p className="line">Do you mind?</p>
						</div>

						<div>
							<p className="credits left-padding">
								So Much of Yourself written and recorded by Brandon Day, Ethan
								Gans, Nicholas Vereschak, and Ryan Garbett. Recording engineer
								Danny Paulson. Mixed and produced by Danny Paulson. Brandon Day - Guitar and
								vocals Ethan Gans - Guitar Nicholas Vereschak - Drums and keys Ryan
								Garbett - Bass guitar. Recorded in my bedroom, my living room, The Shed, Nicks
								apartment, and somewhere in Israel Fall 2018
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SoMuchOfYourself;
