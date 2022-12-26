import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MainLogo from '../images/main_logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackgroundImage from '../images/mask.png';

const pages = ['Services', 'About Us', 'Blog', 'Resources', 'Contact Us'];

const localButtonTheme = createTheme({
  palette: {
    primary: {
      main: '#CC8712',
      contrastText: '#fff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontSize: 16,
    },
    fontSize: 20,
  },
});

function ResponsiveAppBar() {
  return (
    <Box
      style={{
        // backgroundImage:
        //   'url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8)',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '90vh',
      }}
    >
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ m: 1.5 }}>
              <img src={MainLogo} style={{ height: 95.39 }} alt="Logo" />
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'space-evenly',
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    variant="text"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    fontSize={16}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ flexGrow: 1 }}>
        <Container
          sx={{
            display: 'felx',
            flexDirection: 'column',
            alignItems: 'initial',
            // position: 'relative',
          }}
        >
          <Container>
            <Typography
              align="left"
              gutterBottom
              color="white"
              fontSize={60}
              mt={24}
              ml={-16}
              // sx={{position: 'fixed', top: 310, left: 280}}
            >
              Grow Your Business Value
              <br />
              with Talented People
            </Typography>
            <ThemeProvider theme={localButtonTheme}>
              <Button
                align="left"
                variant="outlined"
                color="primary"
                sx={{ borderRadius: '0.5rem', color: '#fff', ml: -16 }}
                ml={-16}
              >
                Our Services
              </Button>
            </ThemeProvider>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}
export default ResponsiveAppBar;
