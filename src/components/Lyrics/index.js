import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Intro from "../Intro";
import DramaQueen from "../DramaQueen";
import DependsOnYou from "../DependsOnYou";
import SoMuchOfYourself from "../SoMuchOfYourself";
import "./carousel.css";

class Lyrics extends Component {
	render() {
		return (
			<Carousel
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				infiniteLoop={true}
			>
				<div>
					<Intro />
				</div>
				<div>
					<DramaQueen />
				</div>
				<div>
					<DependsOnYou />
				</div>
				<div>
					<SoMuchOfYourself />
				</div>
			</Carousel>
		);
	}
}

export default Lyrics;