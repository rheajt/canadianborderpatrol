import React from 'react';
import { Flex, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

const BioItem = props => {
  return (
    <Flex
      flexWrap="nowrap"
      flexDirection="column"
      alignItems="center"
      fontSize={[1, 2, 3]}
    >
      <Box>
        <Avatar src={props.bioImage} alt={props.bioName} />
      </Box>
      <Text
        mt={1}
        mb={2}
        fontWeight="bold"
        css={{ textDecoration: 'underline' }}
      >
        {props.bioName}
      </Text>
      <Text mb={1}>{props.bioDescription}</Text>
      <Link href={`https://twitter.com/${props.bioTwitter}`}>
        <FaTwitter />
      </Link>
    </Flex>
  );
};

export default BioItem;

const Avatar = styled.img`
  width: auto;
  max-height: 100px;
  align-self: 'start';
  border-radius: 100%;
`;
