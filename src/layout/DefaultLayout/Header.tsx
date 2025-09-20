// FILE: src/layout/DefaultLayout/Header.tsx
'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../../providers/ThemeProvider';
import { useLanguage } from '../../providers/LanguageProvider';
import { useNotificationList } from '../../hooks/useNotificationList';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import CheckIcon from '@mui/icons-material/Check';

interface HeaderProps {
  handleDrawerToggle: () => void;
}

const languageOptions = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭' },
];

export default function Header({ handleDrawerToggle }: HeaderProps) {
  const { mode, toggleTheme } = useThemeContext();
  const { t, changeLanguage, language } = useLanguage();
  const { notifications, unreadCount, markAsRead, clearAll } =
    useNotificationList();

  const [notificationAnchorEl, setNotificationAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const [languageAnchorEl, setLanguageAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleNotificationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleMarkOneAsRead = (id: number) => {
    markAsRead(id);
  };

  const handleLanguageMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleLanguageChange = (lang: 'en' | 'km') => {
    changeLanguage(lang);
    handleLanguageMenuClose();
  };

  const currentLanguage =
    languageOptions.find((lang) => lang.code === language) ||
    languageOptions[0];

  const isNotificationOpen = Boolean(notificationAnchorEl);
  const isLanguageMenuOpen = Boolean(languageAnchorEl);
  const notificationPopoverId = isNotificationOpen
    ? 'notification-popover'
    : undefined;

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {t('appTitle')}
        </Typography>

        <Button
          color="inherit"
          onClick={handleLanguageMenuOpen}
          startIcon={
            <Box component="span" sx={{ fontSize: '1.5rem', mr: 0.5 }}>
              {currentLanguage.flag}
            </Box>
          }
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ textTransform: 'none', fontSize: '1rem', mr: 1 }}
        >
          {currentLanguage.name}
        </Button>
        <Menu
          anchorEl={languageAnchorEl}
          open={isLanguageMenuOpen}
          onClose={handleLanguageMenuClose}
        >
          {languageOptions.map((option) => (
            <MenuItem
              key={option.code}
              onClick={() => handleLanguageChange(option.code as 'en' | 'km')}
              selected={language === option.code}
            >
              <Box component="span" sx={{ mr: 1.5, fontSize: '1.5rem' }}>
                {option.flag}
              </Box>{' '}
              {option.name}
            </MenuItem>
          ))}
        </Menu>

        <IconButton
          color="inherit"
          aria-describedby={notificationPopoverId}
          onClick={handleNotificationClick}
        >
          <Badge badgeContent={unreadCount} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Popover
          id={notificationPopoverId}
          open={isNotificationOpen}
          anchorEl={notificationAnchorEl}
          onClose={handleNotificationClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Box
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <Box
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography fontWeight="bold">{t('notifications')}</Typography>
              <Button
                size="small"
                onClick={clearAll}
                disabled={notifications.length === 0}
              >
                Clear All
              </Button>
            </Box>
            <Divider />
            <List sx={{ maxHeight: 400, overflow: 'auto' }}>
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <ListItem
                    key={notification.id}
                    sx={{
                      bgcolor: notification.read
                        ? 'action.hover'
                        : 'transparent',
                    }}
                  >
                    <ListItemText
                      primary={notification.message}
                      secondary={notification.timestamp.toLocaleString()}
                    />
                    {!notification.read && (
                      <Tooltip title="Mark as read">
                        <IconButton
                          size="small"
                          onClick={() => handleMarkOneAsRead(notification.id)}
                        >
                          <CheckIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText secondary="No new notifications" />
                </ListItem>
              )}
            </List>
          </Box>
        </Popover>
      </Toolbar>
    </AppBar>
  );
}
