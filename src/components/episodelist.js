import React from 'react';
import { Flex, Box } from 'rebass';
import { Link } from 'gatsby';

import EpisodeListItem from './episodelistitem';
import Divider from './divider';

const EpisodeList = props => (
  <Flex flexWrap='nowrap' flexDirection='column' justifyContent='center'>
    <Divider width={1/6} />
    {props.posts.map((post) => (
      <>
        <EpisodeListItem
          key={post.slug}
          title={post.title}
          slug={post.slug}
          date={post.date}
          shortExcerpt={truncate(post.excerpt, 140, true)}
        />
        <Divider width={1/6} />
      </>
    ))}
  </Flex>
);

// https://stackoverflow.com/questions/1199352/
// smart-way-to-shorten-long-strings-with-javascript
function truncate( theString, n, useWordBoundary ) {
  if (theString.length <= n) { return theString; }
  const subString = theString.substr(0, n-1);
  return (
    useWordBoundary ?
    subString.substr(0, subString.lastIndexOf(' ')) :
    subString
  ) + "..."
}

export default EpisodeList;

// {theMoreButton}
// let theMoreButton;
// if (this.props.moreButton) {
//   theMoreButton = <Text textAlign='right'>
//     <Link to="/episodes/">More <IoMdArrowForward /></Link>
//   </Text>;
// } else {
//   theMoreButton = '';
// }

// <Flex flexWrap='nowrap' flexDirection='column' justifyContent='center'>
//   <Divider width={1/6} />
// </Flex>
