import React from 'react';
import styled from 'styled-components';
import cbplogo from '../assets/imgs/canadian-border-patrol-logo.png';

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'logo title'
    'logo subtitle';
  justify-items: center;
  align-items: center;
  width: 700px;
  margin: 0 auto;
  img {
    grid-area: logo;
    width: 300px;
  }

  h1 {
    grid-area: title;
  }

  h4 {
    grid-area: subtitle;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderStyled>
        <img src={cbplogo} alt="canadian border patrol logo" />
        <h1>Canadian Border Patrol</h1>
        <h4>The Realest, Fake Border Agency in the World</h4>
      </HeaderStyled>
    );
  }
}

export default Header;
