import React from 'react';
import { Flex, Link, Text, Button } from 'rebass';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import iTunesNoteIcon from "@iconify/icons-fa-brands/itunes-note";
import googlePlayIcon from "@iconify/icons-fa-brands/google-play";
import stitcherIcon from "@iconify/icons-simple-icons/stitcher";
import rssIcon from "@iconify/icons-fa-solid/rss";
import twitterIcon from "@iconify/icons-fa-brands/twitter";


const LinkBar = props => {
  const rssFeed =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/rss.xml'
      : 'https://canadianborderpatrol.com/rss.xml';
  const links = [
    {
      text: "iTunes",
      href: "https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",
      icon: iTunesNoteIcon,
    },
    {
      text: "Google Play",
      href: "https://play.google.com/music/listen?u=0#/ps/Ijfvdnyyavpl4jo4witxkakz5f4",
      icon: googlePlayIcon,
    },
    {
      text: "Stitcher",
      href: "https://www.stitcher.com/podcast/canadian-border-patrol?refid=stpr",
      icon: stitcherIcon,
    },
    {
      text: "RSS",
      href: rssFeed,
      icon: rssIcon,
    },
    {
      text: "Twitter",
      href: "https://podcasts.apple.com/ca/podcast/canadian-border-patrol/id1463751515",
      icon: twitterIcon,
    }
  ]
  return (
    <Flex
      flexWrap="wrap"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      p={2}
      pr={2}
    >
      {links.map((link, index, array) => {
        return (
          <Button bg='flagred' m={1}>
            <Link
              color='white'
              href={link.href}>
              <Icon icon={link.icon} /> {link.text}
            </Link>
          </Button>
        )
      })}
    </Flex>
  );
}

export default LinkBar;
