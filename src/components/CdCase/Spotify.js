import React from "react"
import styled from "styled-components"

const SpotifyIFrame = styled.iframe`
  margin: 0 0 1em 1em;
`

const Spotify = () => (
  <SpotifyIFrame 
    src="https://open.spotify.com/follow/1/?uri=spotify:artist:2GnSTnxs3NcFhxJNOrSb92&size=detail&theme=light&show-count=0"
    width="300"
    height="56"
    scrolling="no"
    frameborder="0"
    style={{ border: "none", overflow: "hidden" }}
    allowtransparency="true"
  />
)

export default Spotify
