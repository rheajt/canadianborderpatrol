import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import UserLinks from './UserLinks';

const FooterStyled = styled.footer`
  justify-content: center;
  align-content: center;
  padding: 10px 5px 5px;

  .notice-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-top: 25px;
    h4 {
      text-align: center;
      margin: 0;
    }
    @media (max-width: 640px - 1px) {
      justify-content: space-around;
    }
  }
`;

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <FooterStyled>
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <h4>{copyright}</h4>

          <Link to={url}>
            <button>Subscribe</button>
          </Link>
          <h4>
            Based on
            {' '}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            .
          </h4>
        </div>
      </FooterStyled>
    );
  }
}

export default Footer;
