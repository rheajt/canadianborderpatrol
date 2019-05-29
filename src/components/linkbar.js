import React from 'react';
import { Flex, Link, Text } from 'rebass';
import styled from 'styled-components';
import { FaItunesNote, FaRss, FaTwitter } from 'react-icons/fa';

function LinkBar(props) {
  const rssFeed =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/rss.xml'
      : 'https://canadianborderpatrol.com/rss.xml';
  return (
    <Flex
      flexWrap="nowrap"
      flexDirection="row"
      alignItems="center"
      p={2}
      pr={2}
    >
      <Text fontSize={[2, 3, 4]}>
        <StyledLink
          // px={[1, 2]}
          href="https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515"
        >
          <FaItunesNote /> iTunes
        </StyledLink>
        |
        <StyledLink
          px={[1, 2]}
          href="https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr"
        >
          Stitcher
        </StyledLink>
        |
        <StyledLink px={[1, 2]} href={rssFeed}>
          <FaRss /> Rss
        </StyledLink>
        |
        <StyledLink px={[1, 2]} href="https://twitter.com/canborderpatrol">
          <FaTwitter /> Twitter
        </StyledLink>
      </Text>
    </Flex>
  );
}

export default LinkBar;

const StyledLink = styled(Link)`
  color: black;
`;
