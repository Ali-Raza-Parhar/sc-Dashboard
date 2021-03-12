import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

import {
  Box,
  // Button,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  Home as HomeIcon,
  UserPlus as addAcc,
  Users as YourCouncelar,
  Grid as Posts,
  MessageSquare as Comments,
  Rss as Subscriptions,
  Settings
} from 'react-feather';
import NavItem from './NavItem';

const items = [
  {
    href: '/app/dashboard',
    icon: HomeIcon,
    title: 'Home'
  },
  {
    href: '/app/customers',
    icon: addAcc,
    title: 'Connect IG Acc'
  },
  {
    href: '/app/products',
    icon: YourCouncelar,
    title: 'Your Councelar'
  },
  {
    href: '/app/account',
    icon: Posts,
    title: 'Posts'
  },
  {
    href: '/app/settings',
    icon: Comments,
    title: 'Comments'
  },
  {
    href: '/login',
    icon: HistoryOutlinedIcon,
    title: 'Order History'
  },
  {
    href: '/register',
    icon: Subscriptions,
    title: 'Subscriptions'
  },
  {
    href: '/settings',
    icon: Settings,
    title: 'Settings'
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 86,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
