import React from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components'

class BioItem extends React.Component{
  const Avatar = styled.img`
    maxWidth: 100px;
    height: auto;
    align-self: 'start';
    border-radius: 100%;
  `
  render() {
    return(
      <Flex
        flexWrap={this.props.alignImage === 'left' ? 'wrap' : 'wrap-reverse'}
      >
        <Box
          order={this.props.alignImage === 'left' ? 1 : 2}
        >
          <Avatar
            src={this.props.bioImage}
            alt={this.props.bioName}
          />
        </Box>
        <Box
          order={this.props.alignImage === 'left' ? 2 : 1}
        >
          <p>{this.props.bioName}</p>
          <p>{this.props.bioDescription}</p>
          <a href={`https://twitter.com/${this.props.bioTwitter}`}>
            Follow on Twitter!
          </a>
        </Box>
      </Flex>
    )
  }
}

export default BioItem;
