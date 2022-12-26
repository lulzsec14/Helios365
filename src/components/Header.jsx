import React from 'react';

import { Grid, Typography, Paper, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/system';

import MainLogo1 from '../images/main_1.svg';
import MainLogo2 from '../images/main_2.svg';
import MainLogo3 from '../images/main_3.svg';

const localFontTheme = createTheme({
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
    fontSize: 48,
    button: {
      textTransform: 'none',
    },
  },
});

// const cardContentColor = createTheme({
//   palette: {
//     primary: {
//       main: '#153150',
//     },
//     secondary: {
//       main: '#eeeeee',
//     },
//   },
// });

const cardInfo = [
  {
    ind: 0,
    PIC: '../images/main_1.svg',
    mainHeading: 'Zoho Consulting & Implementation',
    mainContent:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
  },
  {
    ind: 1,
    PIC: '../images/main_1.svg',
    mainHeading: 'Zoho Finance Services',
    mainContent:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
  },
  {
    ind: 2,
    PIC: '../images/main_1.svg',
    mainHeading: 'Web Services',
    mainContent:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
  },
];

const Header = () => {
  return (
    <Box sx={{ background: '#EEEEEE', overflow: 'hidden' }}>
      {/* <Container m={5}> */}
      <ThemeProvider theme={localFontTheme}>
        <Typography mt={10} color="primary" style={{ display: 'inline-block' }}>
          What we&nbsp;
        </Typography>
        <Typography color="secondary" style={{ display: 'inline-block' }}>
          do
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} mb={12} mt={4}>
              <Grid container justifyContent="center" spacing={6}>
                <Grid key={0} item>
                  <Paper
                    p={3}
                    sx={{
                      height: 440,
                      width: 385,
                      p: 3,
                      borderRadius: '1rem',
                    }}
                    elevation={6}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={MainLogo1}
                        style={{ height: 120, width: 120 }}
                        alt="Logo"
                      />
                    </Box>
                    {/* <ThemeProvider theme={cardContentColor}> */}
                    <Container mt={3}>
                      <Typography fontSize={20} color="primary" mt={3.5}>
                        Zoho Consulting & <br /> Implementation
                      </Typography>

                      <Typography fontSize={14} color={'#424242'} mt={2.5}>
                        {cardInfo[0].mainContent}
                      </Typography>
                      {/* </ThemeProvider> */}
                      <Button style={{ fontSize: 16, color: '#CC8712' }}>
                        {'Read More >>'}
                      </Button>
                    </Container>
                  </Paper>
                </Grid>
                <Grid key={1} item>
                  <Paper
                    sx={{
                      height: 440,
                      width: 385,
                      p: 3,
                      borderRadius: '1rem',
                    }}
                    elevation={6}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={MainLogo2}
                        style={{ height: 120, width: 120 }}
                        alt="Logo"
                      />
                    </Box>
                    {/* <ThemeProvider theme={cardContentColor}> */}
                    <Container mt={3}>
                      <Typography fontSize={20} color="primary" mt={3.5}>
                        Zoho Finance <br /> Services
                      </Typography>
                      <Typography fontSize={14} color={'#424242'} mt={2.5}>
                        {cardInfo[1].mainContent}
                      </Typography>
                      <Button style={{ fontSize: 16, color: '#CC8712' }}>
                        {'Read More >>'}
                      </Button>
                    </Container>
                    {/* </ThemeProvider> */}
                  </Paper>
                </Grid>
                <Grid key={2} item>
                  <Paper
                    sx={{
                      height: 440,
                      width: 385,
                      p: 3,
                      borderRadius: '1rem',
                    }}
                    elevation={6}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={MainLogo3}
                        style={{ height: 120, width: 120 }}
                        alt="Logo"
                      />
                    </Box>
                    {/* <ThemeProvider theme={cardContentColor}> */}
                    <Container mt={3}>
                      <Typography fontSize={20} color="primary" mt={3.5}>
                        Web <br /> Services
                      </Typography>
                      <Typography fontSize={14} color={'#424242'} mt={2.5}>
                        {cardInfo[2].mainContent}
                      </Typography>
                      <Button style={{ fontSize: 16, color: '#CC8712' }}>
                        {'Read More >>'}
                      </Button>
                    </Container>
                    {/* </ThemeProvider> */}
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      {/* </Container> */}
    </Box>
  );
};

export default Header;
