import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Title from './title';
import LinkBar from './linkbar';


const Header = () => {
  return(
    <Background>
      <Flex
        width={1}
        flexWrap='noflex'
        flexDirection='column'
        alignItems='center'>
        <Title />
        <LinkBar />
      </Flex>
    </Background>
  )
}

export default Header;

const Background = styled.div`
  background-color: #FFFFFFE6;
  padding: .5rem .5rem;
  margin-bottom: .5rem;
  border-radius: 15px;
`;
