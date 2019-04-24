import React from 'react';
import { Flex } from 'rebass';

import EpisodeListItem from './episodelistitem';
import Divider from './divider';

const EpisodeList = props => (
  <Flex flexWrap="nowrap" flexDirection="column" justifyContent="center">
    <Divider width={1 / 2} />
    {props.posts.map(post => (
      <React.Fragment key={post.slug}>
        <EpisodeListItem
          title={post.title}
          slug={post.slug}
          date={post.date}
          shortExcerpt={post.excerpt}
        />
        <Divider width={1 / 2} />
      </React.Fragment>
    ))}
  </Flex>
);

export default EpisodeList;
