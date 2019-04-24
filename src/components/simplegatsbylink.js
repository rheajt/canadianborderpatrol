import React from 'react';
import { Text } from 'rebass';
import { Link } from 'gatsby';

const SimpleGatsbyLink = props => (
  <Text
    textAlign={props.textAlign}
    fontSize={props.fontSize}
    fontWeight={props.fontWeight}
  >
    <Link
      to={props.to}
      css={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      {props.children}
    </Link>
  </Text>
);

export default SimpleGatsbyLink;
