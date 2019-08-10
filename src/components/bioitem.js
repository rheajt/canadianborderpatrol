import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import twitterIcon from "@iconify/icons-fa-brands/twitter";

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
        <Icon icon={twitterIcon} />
      </Link>
    </Flex>
  );
};

BioItem.propTypes = {
  bioImage: PropTypes.string,
  bioName: PropTypes.string,
  bioDescription: PropTypes.string,
  bioTwitter: PropTypes.string,
};

export default BioItem;

const Avatar = styled.img`
  width: auto;
  max-height: 100px;
  align-self: 'start';
  border-radius: 100%;
`;
