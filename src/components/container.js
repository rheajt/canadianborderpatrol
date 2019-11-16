import React from 'react';
import { Box } from 'rebass';

function Container({ backgroundImage, ...props }) {
  return (
    <Box
      {...props}
      mx="auto"
      css={{
        backgroundImage: `url(${backgroundImage.urls.regular})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
  );
}

export default Container;
