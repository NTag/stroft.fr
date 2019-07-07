import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cover from './cover.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const LinksContainer = styled.div`
  padding: 3rem 10rem;
  height: 3rem;
  text-align: center;

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
const Title = styled.h3`
  text-align: center;
  height: 0px;
  position: relative;
  margin: 0;
  padding: 0;
  top: -50px;
`;

export default () => {
  return (
    <Container>
      <div>
        <img src={cover} style={{ width: 400, maxWidth: '100vw' }} alt="Pochette de l’album ABCDAIRE" />
        <Title>
          vendredi 12 juillet
        </Title>
      </div>
      <LinksContainer>
        <Link target="_blank" rel="noopener noreferer" title="Chaîne YouTube de Stroft" href="https://www.youtube.com/channel/UCX4ii_HniVkC-hDf7GtQabg">
          <FontAwesomeIcon icon={['fab', 'youtube']} />
        </Link>
        <Link target="_blank" rel="noopener noreferer" title="Instagram de Stroft" href="https://instagram.com/stroftofficiel">
          <FontAwesomeIcon icon={['fab', 'instagram']} />
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
