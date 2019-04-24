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
        {props.date}
      </Text>
    </Flex>
    <Box pl={[2, 3, 4]}>{props.shortExcerpt}</Box>
  </Flex>
);

export default EpisodeListItem;
