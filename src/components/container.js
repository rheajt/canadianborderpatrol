import React from 'react';
import { Box } from 'rebass';

class Container extends React.Component {
  render() {
    return(
      <Box
        {...this.props}
        mx='auto'
        p={2}
        css={{
          maxWidth: '1024px', 
          minWidth: '320px'
        }}
      />
    )
  }
}

export default Container;
