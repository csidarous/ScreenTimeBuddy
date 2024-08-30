import { AppBar, Button, Typography, Toolbar, Box } from '@mui/material';
import Link from 'next/link';

const NavBar = () => {
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
        <Button href="#hero" >
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
                alt="Screen Time uddy Logo"
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
              ScreenTime Buddie
            </Typography>
          </Box>
        </Button>

        {/* Centered Navigation Links */}
        <Box sx={{ display: 'flex', gap: '2rem', flexGrow: 1, justifyContent: 'center' }}>
          <Button color="inherit" href="#features" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Features
          </Button>
          <Button color="inherit" href="#faq" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            FAQ
          </Button>
        </Box>

        {/* Waitlist Button */}
        <Button 
          variant="contained" 
          color="secondary" 
          href="/waitlist" 
          sx={{ 
            fontWeight: 'bold', 
            borderRadius: '20px', 
            padding: '0.5rem 1.5rem',
            bgcolor: '#ff4081', // Pink color for the button
            '&:hover': {
              bgcolor: '#ff80ab', // Slightly lighter pink on hover
            }
          }}
        >
          Join Waitlist
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
