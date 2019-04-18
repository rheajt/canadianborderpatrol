import React from 'react';
import { Box } from 'rebass';

class Divider extends React.Component {
  render() {
    return(
      <Box
        {...props}
        as='hr'
        bg='grey'
        css={{ border: 0, height: 1 }}
      />
    )
  }
}

export default Divider;