import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import Title from './title';
import LinkBar from './linkbar';

const Header = () => {
  return (
    <Background>
      <Flex
        // flexWrap="noflex"
        flexDirection="column"
        alignItems="center"
      >
        <Title />
        <LinkBar />
      </Flex>
    </Background>
  );
};

export default Header;

const Background = styled.div`
  /* background-image: radial-gradient(circle at center, #ffffffc7, #ffffff00); */
  margin: 0 auto;
  max-width: 768px;
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 15px;
`;
