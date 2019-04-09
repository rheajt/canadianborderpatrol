import React, { Component } from 'react';
import styled from 'styled-components';

const UserLinksStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <button key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </button>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <UserLinksStyled>{this.getLinkElements()}</UserLinksStyled>;
  }
}

export default UserLinks;