import React from 'react';
import renderer from 'react-test-renderer';

import BioItem from '../bioitem';

describe('<BioItem />', () => {
  const author = {
    image: 'http://imgur.com',
    name: 'test',
    twitter: 'https://twitter.com',
    description: 'lorem ipsum',
  };
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BioItem
          bioImage={author.image}
          bioName={author.name}
          bioTwitter={author.twitter}
          bioDescription={author.description}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
