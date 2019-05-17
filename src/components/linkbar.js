import React from 'react';
import { Flex, Link, Text } from 'rebass';

const LinkBar = props => {
  const rssFeed =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/rss.xml'
      : 'https://canadianborderpatrol.com/rss.xml';
  return (
    <Flex
      flexWrap="nowrap"
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
      p={1}
      pr={2}
    >
      <Text fontSize={[2, 3, 4]}>
          <Link px={[1, 2]} href="https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515">
            iTunes
          </Link>
          |
          <Link px={{1, 2}} href="https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr">
            Stitcher
          </Link>
          |
          <Link px={[1, 2]} href={rssFeed}>
            RSS
          </Link>
          |
          <Link px={[1, 2]} href="https://twitter.com/canborderpatrol">
            Twitter
          </Link>
      </Text>
    </Flex>
  );
};

export default LinkBar;
