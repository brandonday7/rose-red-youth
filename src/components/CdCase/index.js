import React, { Component } from "react"
import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import rings from "../../images/logos/rings.png"

import spotifyLogo from "../../images/logos/spotify.png"
import appleLogo from "../../images/logos/apple.png"
import tiktokLogo from "../../images/logos/tiktok.png"
import soundcloudLogo from "../../images/logos/soundcloud.png"
import youtubeLogo from "../../images/logos/youtube.png"
import instagramLogo from "../../images/logos/instagram.png"
import twitterLogo from "../../images/logos/twitter.png"

const spotify =
  "https://open.spotify.com/artist/2GnSTnxs3NcFhxJNOrSb92?si=DctWUYaXRwu2MdjVOgSSgQ"
const appleMusic = "https://music.apple.com/ca/artist/rose-red-youth/1458640768"
const tiktok = "https://www.tiktok.com/@rose_red_youth"
const soundcloud = "https://soundcloud.com/roseredyouth"
const youtube = "https://www.youtube.com/channel/UCwOLyxcAVrRVY6DIb96TJmg"
const instagram = "https://www.instagram.com/roseredyouthband/"
const twitter = "https://twitter.com/rose_red_youth"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f0d6;
  /* background-color: #4e7069; */
  font-family: "Arial";
`

const bounce = keyframes`
	from {
		transform: translateY(1px);
	}
	to {
		transform: translateY(-1px);
	}
`

const Eras = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    transform: translateY(-70px);

    & > * {
      margin: 40px 0;
    }
  }
`

const Rings = styled.img`
  max-width: 350px;

  animation: bounce 3s infinite;
`

const Ep = styled.div`
  cursor: pointer;
  font-size: 25px;
  font-family: "Beyond Infinity";
  src: url("../../fonts/Beyond Infinity.ttf") format("truetype");
`

const IMissSummer = styled.div`
  cursor: pointer;
  font-size: 25px;
  font-family: "Roslindale";
  src: url("../../fonts/RoslindaleText-Regular.woff") format("woff");
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const fadeIn = keyframes`
	from {
		opactity: 0;
	}
	to {
		opacity: 1;
	}
`

const Instructions = styled.div`
  margin-bottom: 25px;
  font-size: 12px;
  animation: fadeIn 3s;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
`

const Platforms = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 500px;
`

const Platform = styled.a`
  text-decoration: none;
`

const Icon = styled.img`
  height: 20px;
`

class CdCase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instructionsVisible: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ instructionsVisible: true }), 5000)
  }

  render() {
    return (
      <Container>
        <Eras>
          <StyledLink to="/ep">
            <Ep>Rose Red Youth Ep</Ep>
          </StyledLink>
          <a
            href="https://distrokid.com/hyperfollow/roseredyouth/lets-just-be-friends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Rings src={rings} />
          </a>
          <StyledLink to="/imisssummer">
            <IMissSummer>I Miss Summer</IMissSummer>
          </StyledLink>
        </Eras>
        <Center>
          {this.state.instructionsVisible && (
            <Instructions>Click an era to view</Instructions>
          )}
          <Platforms>
            <Platform href={spotify} target="_blank" rel="noopener noreferrer">
              <Icon src={spotifyLogo} />
            </Platform>
            <Platform
              href={appleMusic}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={appleLogo} />
            </Platform>
            <Platform href={tiktok} target="_blank" rel="noopener noreferrer">
              <Icon src={tiktokLogo} />
            </Platform>
            <Platform
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={instagramLogo} />
            </Platform>
            <Platform href={twitter} target="_blank" rel="noopener noreferrer">
              <Icon src={twitterLogo} />
            </Platform>
            <Platform href={youtube} target="_blank" rel="noopener noreferrer">
              <Icon src={youtubeLogo} />
            </Platform>
            <Platform
              href={soundcloud}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={soundcloudLogo} />
            </Platform>
          </Platforms>
        </Center>
      </Container>
    )
  }
}

export default CdCase
