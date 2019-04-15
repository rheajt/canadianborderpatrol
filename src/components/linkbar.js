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
      >
        <Link href='http://www.apple.com'><FaPodcast /></Link>
        <Link href='https://en.wikipedia.org/wiki/RSS'><FaRss /></Link>
        <Link href='https://twitter.com/canborderpatrol'><FaTwitter /></Link>
      </Flex>
    )
  }
}

export default LinkBar;
