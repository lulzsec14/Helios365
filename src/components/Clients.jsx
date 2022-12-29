import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, createTheme, ThemeProvider, Grid } from '@mui/material';

import Company1 from '../images/company1.png';
import Company2 from '../images/company2.png';
import Company3 from '../images/company3.png';
import Company4 from '../images/company4.png';
import Company5 from '../images/company5.png';
import Company6 from '../images/company6.png';
import Company7 from '../images/company7.png';
import Company8 from '../images/company8.png';
import Company9 from '../images/company9.png';

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

const Clients = () => {
  return (
    <Box component="section" sx={{ overflow: 'hidden', bgcolor: '#ffffff' }}>
      <ThemeProvider theme={aboutColor}>
        <Container sx={{ mb: 2 }}>
          <Typography
            fontSize={42}
            color="primary"
            align="center"
            mt={8}
            sx={{ display: 'inline-block', fontWeight: 600 }}
          >
            Our&nbsp;
          </Typography>
          <Typography
            fontSize={42}
            color="secondary"
            sx={{ display: 'inline-block', fontWeight: 600 }}
          >
            Clients
          </Typography>
        </Container>
        <Box mb={8}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} mt={3}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid key={1} item>
                  <Box
                    sx={{
                      height: 90,
                      width: 256,
                      boxShadow: 6,
                      // p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company1}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid key={2} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,

                      width: 256,
                      boxShadow: 6,
                      // p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company2}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid key={3} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,
                      width: 256,
                      boxShadow: 6,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company3}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid key={4} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,

                      width: 256,
                      boxShadow: 6,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company4}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid key={5} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,

                      width: 256,
                      boxShadow: 6,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company5}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={2} mt={1}>
                <Grid key={6} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,

                      width: 256,
                      boxShadow: 6,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company6}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid key={7} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,
                      width: 256,
                      boxShadow: 6,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company7}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid key={8} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,

                      width: 256,
                      boxShadow: 6,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company8}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid key={9} item>
                  <Box
                    sx={{
                      // height: 100,
                      height: 90,

                      width: 256,
                      boxShadow: 6,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '2rem',
                      borderTopRightRadius: '2rem',
                      textAlign: 'center',
                      // border: 1,
                      padding: 1,
                    }}
                  >
                    <Box sx={{ mt: 2 }}>
                      <img
                        mt={3}
                        src={Company9}
                        style={{ height: 57, width: 156 }}
                        alt="Logo"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Clients;
