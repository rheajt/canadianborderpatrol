import React from 'react';
import Flex from 'rebass';
import { Link } from 'gatsby';
import { IoMdArrowForwa } from 'react-icons/io';

import EpisodeListItem from './episodelistitem';
import Divider from './divider';

class EpisodeList extends React.Component {
  render() {
    return(
      <Flex
        flexWrap='nowrap'
        flexDirection='column'
        justifyContent='center'
      >
        <Divider width={1/6} />
        {this.props.posts.map((post) => {
          <EpisodeListItem
            title={post.frontmatter.title}
            slug={post.fields.slug}
            date={post.frontmatter.date}
            shortExcerpt={truncate(post.excerpt, 140, true)}
          />
          <Divider width={1/6} />
        })}
        {
          this.props.moreButton ?
          {
            <Text textAlign='right'>
              <Link to="/episodes/">More <IoMdArrowForwa /></Link>
            </Text>
          } :
          ''
        }
      </Flex>
    )
  }
}

export default EpisodeList;

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
