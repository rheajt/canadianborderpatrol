import React from 'react';
import { Flex, Box } from 'rebass';

const Divider = props => (
  <Flex flexWrap="flex" justifyContent="center">
    <Box width={props.width} my={2}>
      <hr />
    </Box>
  </Flex>
);

export default Divider;