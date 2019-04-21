import React from 'react';
import { Flex, Link } from 'rebass';
import { FaPodcast, FaRss, FaTwitter } from 'react-icons/fa';


class LinkBar extends React.Component {
  render() {
    return(
      <Flex
        flexWrap='nowrap'
        flexDirection='row'
        justifyContent='flex-start'
        alignItems='center'
        p={1}
        pr={2}
      >
        <Link px={1} href='http://www.apple.com'>
          <FaPodcast />
        </Link>
        <Link px={1} href='https://en.wikipedia.org/wiki/RSS'>
          <FaRss />
        </Link>
        <Link px={1} href='https://twitter.com/canborderpatrol'>
          <FaTwitter />
        </Link>
      </Flex>
    )
  }
}

export default LinkBar;
