import Button from '@mui/material/Button'; // Material UI for styling the button
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Hero = () => {
    return (
        <Box 
            id="hero" 
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                bgcolor: '#5F9EA0',
                color: 'text.primary',
                py: 10,
                px: 2,
                mt: 8,
            }}
        >
            {/* Logo in Circle */}
            <Box 
                sx={{
                    width: 300, 
                    height: 300, 
                    bgcolor: 'common.white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#00004d',
                    boxShadow: 3,
                    mb: 6
                }}
            >
                <img 
                    src="/img/logo.png" // replace with your actual logo
                    alt="Screen Time Buddie Logo"
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'contain'
                    }}
                />
            </Box>

            {/* Hero Content */}
            <Box 
                sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    p: 2,
                    textAlign: 'center'
                }}
            >
                {/* Title */}
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Reclaim Your Focus with <br /> Screen Time Buddie
                </Typography>
                
                {/* Tagline */}
                <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
                Empower yourself and others to take control of screen time with Screen Time Buddie, the accountability app that makes it easier for parents, friends, and everyone to stay productive, reduce screen time, and savor more of lifes moments together.
                </Typography>
                
                {/* Call to Action Button */}
                <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    sx={{ 
                        fontWeight: 'bold', 
                        fontSize: '1.25rem', 
                        px: 4, 
                        py: 2, 
                        borderRadius: '25px' 
                    }}
                    href="/waitlist"
                >
                    Join Waitlist
                </Button>
            </Box>
        </Box>
    );
}

export default Hero;
