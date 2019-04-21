import React from 'react';
import { Flex, Box, Text, Link } from 'rebass';
import styled from 'styled-components'

class BioItem extends React.Component{
  render() {
    const Avatar = styled.img`
      maxWidth: 100px;
      height: auto;
      align-self: 'start';
      border-radius: 100%;
    `
    return(
      <Flex
        flexWrap='nowrap'
        flexDirection='column'
        alignItems='center'
        fontSize={[1,2,3]}
      >
        <Box>
          <Avatar
            src={this.props.bioImage}
            alt={this.props.bioName}
          />
        </Box>
        <Text
          mt={1}
          mb={2}
          fontWeight='bold'
          css={{textDecoration: 'underline'}}
        >
          {this.props.bioName}
        </Text>
        <Text mb={1}>
          {this.props.bioDescription}
        </Text>
        <Link href={`https://twitter.com/${this.props.bioTwitter}`}>
            Follow on Twitter!
        </Link>
      </Flex>
    )
  }
}

export default BioItem;
