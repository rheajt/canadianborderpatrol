import React from 'react';
import { Flex, Box, Text } from 'rebass';

import SimpleGatsbyLink from './simplegatsbylink';

const EpisodeListItem = props => (
  <Flex flexWrap="nowrap" flexDirection="column" mx={2}>
    <Flex flexWrap="wrap" flexDirection="row" alignItems="baseline" mb={2}>
      <SimpleGatsbyLink fontSize={[3, 4, 5]} fontWeight="bold" to={props.slug}>
        {props.title}
      </SimpleGatsbyLink>
      <Text fontSize={[0, 1, 2]} ml={2} css={{ fontStyle: 'italic' }}>
        Ep. {props.number} - {props.date}
      </Text>
    </Flex>
    <Text fontSize={[1, 2, 3]} pl={[2, 3, 4]}>{props.shortExcerpt}</Text>
  </Flex>
);

export default EpisodeListItem;
