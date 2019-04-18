import React from 'react';
import { Box } from 'rebass';

class Container extends React.Component {
  render() {
    return(
      <Box
        {...this.props}
        mx='auto'
        css={{
          maxWidth: '1024px'
        }}
      />
    )
  }
}

export default Container;
