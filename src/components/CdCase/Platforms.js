import React from "react"
import styled, { keyframes } from "styled-components"
import spotify from "../../images/logos/spotify.png"
import apple from "../../images/logos/appleMusic.png"
import tiktok from "../../images/logos/tiktok.png"
import soundcloud from "../../images/logos/soundcloud.png"
import youtube from "../../images/logos/youtube.png"
import instagram from "../../images/logos/instagram.png"
import Spotify from "./Spotify"

const epAppleMusic =
  "https://music.apple.com/ca/artist/rose-red-youth/1458640768"
const epSpotify =
  "https://open.spotify.com/artist/2GnSTnxs3NcFhxJNOrSb92?si=x0SHXrk1S2KqJ4Xm4d1iBQ"
const epTiktok = "https://www.tiktok.com/@rose_red_youth"
const epSoundcloud = "https://soundcloud.com/roseredyouth"
const epYoutube = "https://www.youtube.com/channel/UCwOLyxcAVrRVY6DIb96TJmg"
const epInstagram = "https://www.instagram.com/roseredyouthband/"

const fade = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const StyledDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${fade} 0.8s;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: initial;
  }
`

const StyledImg = styled.img`
  width: 30px;
  margin: 0 1em 1em 0;
  cursor: pointer;
`

const Links = styled.div`
  display: flex;
  margin-left: 1em;

  @media (max-width: 500px) {
    .tier-2 {
      display: none;
    }
  }
`

const Platforms = () => (
  <StyledDiv>
    <Spotify />
    <Links>
      <a
        href={epSpotify}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="tier-2"
      >
        <StyledImg src={spotify} alt="Spotify Logo" />
      </a>
      <a href={epAppleMusic} target="_blank" rel="noopener noreferrer nofollow">
        <StyledImg src={apple} alt="Apple Music Logo" />
      </a>
      <a href={epTiktok} target="_blank" rel="noopener noreferrer nofollow">
        <StyledImg src={tiktok} alt="Tiktok Logo" />
      </a>
      <a href={epYoutube} target="_blank" rel="noopener noreferrer nofollow">
        <StyledImg src={youtube} alt="YouTube Logo" />
      </a>
      <a href={epSoundcloud} target="_blank" rel="noopener noreferrer nofollow">
        <StyledImg src={soundcloud} alt="Soundcloud Logo" />
      </a>
      <a href={epInstagram} target="_blank" rel="noopener noreferrer nofollow">
        <StyledImg src={instagram} alt="Instagram Logo" />
      </a>
    </Links>
  </StyledDiv>
)

export default Platforms
