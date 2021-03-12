import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Button,
  Menu,
  // user profile
  Avatar,
  Typography,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
// import InputIcon from '@material-ui/icons/Input';
import Logo from 'src/components/Logo';
import { LogOut, User, Search as SearchIcon } from 'react-feather';
import NavItem from './NavBar/NavItem';

const useStyles = makeStyles(() => ({
  avatar: {
    cursor: 'pointer',
    width: 35,
    height: 35
  },
  title: {
    color: '#fff',
    textTransform: 'capitalize',
    letterSpacing: '1px',
    fontSize: '13px',
    fontWeight: 400
  }
}));

const items = [
  {
    href: '/app/account',
    title: 'Profile',
    icon: User
  },
  {
    href: '/app/logout',
    title: 'Logout',
    icon: LogOut
  }
];

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  name: 'Katarina Smith'
};

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <Box maxWidth={500}>
            <TextField
              className={classes.title}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action" className={classes.title}>
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => handleClick(e)}
            >
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                p={1}
              >
                <Avatar
                  className={classes.avatar}
                  // component={RouterLink}
                  src={user.avatar}
                  // to="/app/account"
                />
                <Typography
                  className={`${classes.name} ${classes.title}`}
                  color="textPrimary"
                  variant="subtitle1"
                >
                  {user.name}
                </Typography>
              </Box>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {items.map((item) => {
                return (
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                );
              })}
            </Menu>
          </div>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
