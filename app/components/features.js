import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const featuresData = [
  {
    title: "Monitor Screen Time",
    description: "Keep track of how much time your child spends on their devices.",
    bgcolor: "primary.light",
  },
  {
    title: "Set Limits",
    description: "Set daily screen time limits and ensure healthy habits.",
    bgcolor: "secondary.light",
  },
  {
    title: "Focus on Real Life",
    description: "Help your family focus on real-life interactions and activities.",
    bgcolor: "warning.light",
  },
  {
    title: "Easy Setup",
    description: "Get started quickly with our user-friendly setup process.",
    bgcolor: "success.light",
  },
  {
    title: "Customizable Alerts",
    description: "Receive alerts and notifications tailored to your preferences.",
    bgcolor: "info.light",
  },
  {
    title: "Detailed Reports",
    description: "Access detailed reports on screen time usage and trends.",
    bgcolor: "error.light",
  },
];

const Features = () => {
  return (
    <Box
      id="features"
      sx={{
        py: 10,
        px: 2,
        bgcolor: '#5F9EA0',
        color: 'text.primary',
        textAlign: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#fff', mb: 6 }}
      >
        Features
      </Typography>

      {/* Features Grid */}
      <Grid container spacing={4} justifyContent="center">
        {featuresData.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: feature.bgcolor,
                boxShadow: 3,
                height: '100%', // Ensures the card takes up full height of the grid item
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
