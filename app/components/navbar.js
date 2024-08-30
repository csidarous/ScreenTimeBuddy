import { useState } from 'react';
import { AppBar, Button, Typography, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#333', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
        padding: '0.5rem 1rem' 
      }} 
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo with Link to Home */}
        <Button href="#hero">
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box 
              sx={{
                width: 60, 
                height: 60, 
                bgcolor: 'common.white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: '#00004d',
                boxShadow: 3,
                marginRight: 2, // Space between logo and text
              }}
            >
              <img 
                src="/img/logo.png" // replace with your actual logo
                alt="Screen Time Buddy Logo"
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'contain'
                }}
              />
            </Box>

            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#fff', 
                letterSpacing: '0.05em',
              }}
            >
              ScreenTime Buddy
            </Typography>
          </Box>
        </Button>

        {/* Conditional Rendering: Desktop or Mobile View */}
        {!isMobile ? (
          // Centered Navigation Links for Desktop
          <Box sx={{ display: 'flex', gap: '2rem', flexGrow: 1, justifyContent: 'center' }}>
            <Button color="inherit" href="#features" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Features
            </Button>
            <Button color="inherit" href="#faq" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              FAQ
            </Button>
          </Box>
        ) : (
          // Menu Icon for Mobile
          <IconButton 
            color="inherit" 
            edge="end" 
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Waitlist Button for Desktop Only */}
        {!isMobile && (
          <Button 
            variant="contained" 
            color="secondary" 
            href="/waitlist" 
            sx={{ 
              fontWeight: 'bold', 
              borderRadius: '20px', 
              padding: isMobile ? '0.3rem 1rem' : '0.5rem 1.5rem', // Smaller padding on mobile
              fontSize: isMobile ? '0.8rem' : '1rem', // Smaller font size on mobile
              bgcolor: '#ff4081', // Pink color for the button
              '&:hover': {
                bgcolor: '#ff80ab', // Slightly lighter pink on hover
              }
            }}
          >
            Join Waitlist
          </Button>
        )}
      </Toolbar>

      {/* Drawer for Mobile Navigation Links */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component="a" href="#features">
              <ListItemText primary="Features" />
            </ListItem>
            <ListItem button component="a" href="#faq">
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button component="a" href="/waitlist">
              <ListItemText primary="Join Waitlist" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
