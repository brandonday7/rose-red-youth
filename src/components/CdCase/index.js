import React from "react"
import { Link } from "react-router-dom"
import Platforms from "./Platforms"
import styled from "styled-components"
import rryEp from "../../images/album-art/rryEp.jpg"
import iMissSummer from "../../images/album-art/ims.png"
import letsJustBeFriends from "../../images/album-art/beef.png"

import "../Header/header.css"
import "./cdCase.css"

// const StyledHeading = styled.p`
// 	font-size: 175%;
// 	text-decoration: none;
// 	font-family: "Roslindale";
// 	src: url("../../fonts/RoslindaleText-Regular.woff") format("woff");
// 	color: black;
// 	top: 0;
// 	right: 0;
// 	margin: 0.5em 0.5em;
// 	position: absolute;
// 	color: ${({ main }) => main ? '#555' : 'transparent'};
// 	transform: ${({ main }) => main ? 'translate(3px, -3px)' : 'none'};
// 	-webkit-text-stroke: 1.2px #555;

// 	&:hover {
// 		color: ${({ main }) => main ? '#777' : 'transparent'};
// 		-webkit-text-stroke: 1.2px #777;
// 		transition: 0.7s;
// 	}
// `

const StyledArtworkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 70vw;
    transform: translateY(-100px);
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
  font-family: "Roslindale";
  src: url("../../fonts/RoslindaleText-Regular.woff") format("woff");
`
const SingleContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Presave = styled.div``
const SingleTitle = styled.div`
  font-size: 25px;
  margin: 5px 0;
`

const Artwork = styled.img`
  border-radius: 2px;
  width: 60px;
  cursor: pointer;
  &:hover {
    background-color: black;
    opacity: 0.9;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
  }
`

const SingleArtwork = styled(Artwork)`
  width: 35vw;
  max-width: 400px;
`

const PreviousArtwork = styled(Artwork)`
  margin: 0 5px;
`

const OtherProjects = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
  display: flex;
  align-items: center;
`

const CdCase = () => (
  <Container>
    <OtherProjects>
      <Link to="/imisssummer">
        <PreviousArtwork src={iMissSummer} />
      </Link>
      <Link to="/ep">
        <PreviousArtwork src={rryEp} />
      </Link>
    </OtherProjects>
    <SingleContainer>
      <Presave>Pre-save</Presave>
      <SingleTitle>Let's Just Be Friends</SingleTitle>
      <a
        href="https://distrokid.com/hyperfollow/roseredyouth/lets-just-be-friends"
        target="blank"
      >
        <SingleArtwork src={letsJustBeFriends} />
      </a>
    </SingleContainer>
  </Container>

  // <div className="site-container black">
  /* <Link to="/store">
			<div>
				<StyledHeading main>Store</StyledHeading>
				<StyledHeading>Store</StyledHeading>
			</div>
		</Link> */
  //   <StyledArtworkContainer className="artwork-container">
  //     <Link to="/imisssummer">
  //       <img alt="imisssummer" className="album-art" src={iMissSummer} />
  //     </Link>
  //     <Link to="/ep">
  //       <img alt="rry" className="album-art" src={rryEp} />
  //     </Link>
  //   </StyledArtworkContainer>
  //   <Platforms />
  // </div>
)

export default CdCase
