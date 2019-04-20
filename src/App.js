import React, { useRef, useState, useEffect, useCallback } from 'react';
import './App.css';
import video from './stroft.mp4';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  cursor: ${props => props.displayMouse ? 'pointer' : 'none'};
`;
const VideoContainer = styled.div`
  overflow: hidden;
  max-width: 100%;
  text-align: center;
  width: calc(100vh - 6rem - 3em - 9rem);
  margin-top: 9rem;
`;
const LinksContainer = styled.div`
  opacity: ${props => props.displayit ? '1' : '0'};
  transition: opacity 0.3s;
  cursor: default;
  padding: 3rem 10rem;
  height: 3rem;

  @media (max-width: 800px) {
    padding: 3rem 0rem;
  }
`;
const Link = styled.a`
  color: rgba(100, 100, 100);
  font-size: 3rem;
  transition: color 0.3s;
  cursor: pointer;
  display: inline-block;
  margin-left: 1rem;
  margin-right: 1rem;

  :hover {
    color: rgba(10, 10, 10);
  }
`;

const isTouchDevice = () => {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  const mq = function(query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
    return true;
  }

  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};

const touchDevice = isTouchDevice();

const videoStyle = { display: 'inline-block', position: 'relative', top: -1, right: -2, maxHeight: '100%', maxWidth: '100%' };

export default () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState(null);
  const [displayLinks, setDisplayLinks] = useState(touchDevice);
  const [mouseOverLinks, setMouseOverLinks] = useState(false);

  const onClick = useCallback(() => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  });

  useEffect(() => {
    if (mousePosition) {
      setDisplayLinks(true);
      const hideLinksTimer = setTimeout(() => setDisplayLinks(false), 1000);

      return () => clearTimeout(hideLinksTimer);
    }
  }, [mousePosition]);

  return (
    <Container
      onMouseMove={(e) => !touchDevice && setMousePosition([e.clientX, e.clientY])}
      onClick={onClick}
      displayMouse={mouseOverLinks || displayLinks}
    >
      <VideoContainer>
        <video ref={videoRef} loop style={videoStyle} controls={touchDevice}>
          <source src={video} />
        </video>
      </VideoContainer>
      <LinksContainer
        displayit={mouseOverLinks || displayLinks}
        onMouseEnter={() => setMouseOverLinks(true)}
        onMouseLeave={() => setMouseOverLinks(false)}
        onClick={(e) => e.stopPropagation()}
      >
        <Link target="_blank" rel="noopener noreferer" title="Chaîne YouTube de Stroft" href="https://www.youtube.com/channel/UCX4ii_HniVkC-hDf7GtQabg">
          <FontAwesomeIcon icon={['fab', 'youtube']} />
        </Link>
        <Link target="_blank" rel="noopener noreferer" title="Page Facebook de Stroft" href="https://www.facebook.com/stroftofficiel/">
          <FontAwesomeIcon icon={['fab', 'facebook']} />
        </Link>
        <Link target="_blank" rel="noopener noreferer" title="SoundCloud de Stroft" href="https://soundcloud.com/stroft">
          <FontAwesomeIcon icon={['fab', 'soundcloud']} />
        </Link>
      </LinksContainer>
    </Container>
  );
};
