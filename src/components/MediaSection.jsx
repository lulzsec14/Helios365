import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, createTheme, ThemeProvider } from '@mui/material';
import YoutubeEmbed from './YoutubeEmbed';

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

const MediaSection = () => {
  return (
    <Box component="section" sx={{ overflow: 'hidden', bgcolor: '#ffffff' }}>
      <ThemeProvider theme={aboutColor}>
        <Container sx={{ mb: 2 }}>
          <Typography
            fontSize={42}
            color="primary"
            align="center"
            mt={8}
            style={{ display: 'inline-block' }}
          >
            This Week's&nbsp;
          </Typography>
          <Typography
            fontSize={42}
            color="secondary"
            style={{ display: 'inline-block' }}
          >
            CRM
          </Typography>
        </Container>
        <Box mb={8} mt={7}>
          <YoutubeEmbed embedId="rokGy0huYEA" />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default MediaSection;
