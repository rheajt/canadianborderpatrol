import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Text } from 'rebass';

import SimpleGatsbyLink from './simplegatsbylink';

class EpisodeListItem extends React.Component {
  const
  render() {
    return(
      <Flex flexWrap='nowrap' flexDirection='column' mx={2}>
        <Flex
          flexWrap='wrap'
          flexDirection='row'
          alignItems='baseline'
          mb={2}
        >
          <SimpleGatsbyLink
            fontSize={[3, 4, 5]}
            fontWeight='bold'
            to={this.props.slug}
          >
            {this.props.title}
          </SimpleGatsbyLink>
          <Text fontSize={[0, 1, 2]} ml={2} css={{fontStyle: 'italic'}}>
            {this.props.date}
          </Text>
        </Flex>
        <Box pl={[2, 3, 4]}>
          {this.props.shortExcerpt}
        </Box>
      </Flex>
    )
  }
}

export default EpisodeListItem;
