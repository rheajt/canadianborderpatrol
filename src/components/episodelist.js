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
          number={post.number}
          title={post.title}
          date={post.date}
          slug={post.slug}
          shortExcerpt={post.excerpt}
        />
        <Divider width={1 / 2} />
      </React.Fragment>
    ))}
  </Flex>
);

export default EpisodeList;
