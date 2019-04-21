import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Text } from 'rebass';

class EpisodeListItem extends React.Component {
  const
  render() {
    return(
      <Flex flexWrap='nowrap' flexDirection='column' mx={2}>
        <Text fontSize={[3, 4, 5]}  fontWeight='bold'>
          <Link
            to={this.props.slug}
            css={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            {this.props.title}
          </Link>
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

// TODO: Fix formatting to put date next to title (with flex)
// TODO: Replace css prop on link with site theme
