import React from 'react';
import { Flex, Box, Text } from 'rebass';

class EpisodeListItem extends React.Component {
  const
  render() {
    return(
      <Flex flexWrap='nowrap' flexDirection='column'>
        <Text fontSize={[4, 5, 6]}  fontWeight='bold'>
          {this.props.title}
        </Text>
        <Text fontSize={[0, 1, 2]}>
          {this.props.date}
        </Text>
        <Box pl={[1, 2, 3]}>
          {this.props.shortExcerpt}
        </Box>
      </Flex>
    )
  }
}

export default EpisodeListItem;
