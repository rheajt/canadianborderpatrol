import React from 'react';
import { Flex, Link } from 'rebass';
import { FaPodcast, FaRss, FaTwitter } from 'react-icons/fa';

const LinkBar = props => {
  const rssFeed =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/rss.xml'
      : 'https://canadianborderpatrol.com/rss.xml';
  return (
    <Flex
      flexWrap="nowrap"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      p={1}
      pr={2}
    >
      <Link px={[1, 2]} fontSize={[2, 3]} href="http://www.apple.com">
        <FaPodcast />
      </Link>
      <Link px={[1, 2]} fontSize={[2, 3]} href={rssFeed}>
        <FaRss />
      </Link>
      <Link
        px={[1, 2]}
        fontSize={[2, 3]}
        href="https://twitter.com/canborderpatrol"
      >
        <FaTwitter />
      </Link>
    </Flex>
  );
};

export default LinkBar;
