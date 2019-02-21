import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "./header.css";

class Header extends Component {
	render() {
		return (
			<Fragment>
			<div className="video-container">
				<video className="video" loop autoPlay muted playsInline>
					<source
						src={`${process.env.REACT_APP_BUCKET}pinkAndWhite.mp4`}
						type="video/mp4"
					/>
				</video>
				<div className="absolute">
					<div className="title-container">
						<h1 className="header-title">Rose Red Youth</h1>
					</div>
				</div>
			</div>
			<div className="chevron-container">
				<FontAwesomeIcon 
					className="chevron" 
					icon={faChevronDown}
				/>
			</div>
			</Fragment>
		);
	}
}

export default Header;
