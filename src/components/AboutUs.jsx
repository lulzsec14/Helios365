import React from 'react';
import {
  Box,
  Container,
  Grid,
  Link,
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
      fontWeight: 600,
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
          // width: 1420,
          // height: 657,
          p: 5,
          mb: 8,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={7}>
            <Container p={10}>
              <ThemeProvider theme={aboutColor}>
                <Typography
                  // mt={16}
                  sx={{
                    mt: {
                      xs: 5,
                      sm: 10,
                      md: 16,
                    },
                    display: 'inline-block',
                    fontSize: {
                      xs: 38,
                      lg: 40,
                      xl: 48,
                    },
                    fontWeight: 600,
                  }}
                  // fontSize={48}
                  color="primary"
                >
                  About&nbsp;
                </Typography>
                <Typography
                  // fontSize={48}
                  color="secondary"
                  sx={{
                    display: 'inline-block',
                    fontWeight: 600,
                    fontSize: {
                      xs: 38,
                      lg: 40,
                      xl: 48,
                    },
                  }}
                >
                  Us
                </Typography>
                <Typography
                  fontSize={16}
                  color={'#757575'}
                  align="left"
                  maxWidth={'85%'}
                >
                  {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
                </Typography>
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{ fontSize: 16, color: '#CC8712', fontWeight: 600 }}
                    mt={3}
                  >
                    {'Read More >>'}
                  </Typography>
                </Link>
              </ThemeProvider>
            </Container>
          </Grid>
          <Grid xs={12} sm={12} md={5}>
            <Box sx={{ m: 1.5 }}>
              <img
                src={AboutUsImage}
                style={{ height: 'auto', width: '100%' }}
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
