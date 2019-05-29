import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const Divider = props => (
  <Flex flexWrap="flex" justifyContent="center">
    <Box width={props.width} my={2}>
      <StyledHr />
    </Box>
  </Flex>
);

export default Divider;

const StyledHr = styled.hr`
  background-color: red;
`;
