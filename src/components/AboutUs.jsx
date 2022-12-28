import React from 'react';
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import AboutUsImage from '../images/dangerous.png';

const aboutColor = createTheme({
  palette: {
    primary: {
      main: '#153150',
    },
    secondary: {
      main: '#CC8712',
    },
  },
  typography: {
    fontFamily: ['poppins'],
    button: {
      textTransform: 'none',
    },
  },
});

const AboutUs = () => {
  return (
    <Box
      component={'section'}
      sx={{ background: '#ffffff', overflow: 'hidden' }}
    >
      <Container
        component={'div'}
        sx={{
          width: 1420,
          height: 657,
          p: 5,
          mb: 8,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={7}>
            <Container p={10}>
              <ThemeProvider theme={aboutColor}>
                <Typography
                  mt={16}
                  fontSize={48}
                  color="primary"
                  style={{ display: 'inline-block' }}
                >
                  About&nbsp;
                </Typography>
                <Typography
                  fontSize={48}
                  color="secondary"
                  style={{ display: 'inline-block' }}
                >
                  Us
                </Typography>
                <Typography
                  fontSize={16}
                  color={'#424242'}
                  align="left"
                  maxWidth={'85%'}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </Typography>
                <Typography style={{ fontSize: 16, color: '#CC8712' }} mt={3}>
                  {'Read More >>'}
                </Typography>
              </ThemeProvider>
            </Container>
          </Grid>
          <Grid xs={5}>
            <Box sx={{ m: 1.5 }}>
              <img
                src={AboutUsImage}
                style={{ height: 657, width: 590 }}
                alt="Pic"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
