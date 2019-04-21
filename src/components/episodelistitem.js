import React from 'react';
import { Link } from 'gatsby';
import { Flex, Box, Text } from 'rebass';

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
          <Text >
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

// TODO: Replace css prop on link with site theme
