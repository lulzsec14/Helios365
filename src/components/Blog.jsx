import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {
  Typography,
  createTheme,
  ThemeProvider,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

import Blog1 from '../images/blog1.png';
import Blog2 from '../images/blog2.png';
import Blog3 from '../images/blog3.png';

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

const Blog = () => {
  return (
    <Box component="section" sx={{ overflow: 'hidden', bgcolor: '#F4F6FC' }}>
      <ThemeProvider theme={aboutColor}>
        <Container sx={{ mb: 2 }}>
          <Typography
            component="span"
            fontSize={42}
            color="primary"
            sx={{ display: 'inline-block', fontWeight: 600 }}
            mt={8}
          >
            Blo
          </Typography>
          <Typography
            component="span"
            fontSize={42}
            color="secondary"
            sx={{ display: 'inline-block', fontWeight: 600 }}
          >
            g
          </Typography>
        </Container>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} mt={3}>
            <Grid container justifyContent="center" spacing={8} mb={8}>
              <Grid key={1} item>
                <Card
                  sx={{
                    // width: 400,
                    // height: 570,
                    width: { xs: 305, sm: 400 },
                    height: { xs: 'auto', sm: 570 },
                    borderRadius: '10',
                    boxShadow: 6,
                  }}
                >
                  <CardMedia
                    sx={{ height: 267, width: 'auto ' }}
                    image={Blog1}
                  />
                  <Box p={2}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        fontSize={20}
                        component="div"
                        fontWeight={600}
                      >
                        The CRM Zen Show
                      </Typography>
                      <Typography
                        mt={2}
                        fontSize={14}
                        color="#757575"
                        fontWeight={500}
                      >
                        {
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        }
                      </Typography>
                      <Button sx={{ mt: 2 }} color="secondary">
                        {'Check Out Our Episodes >>'}
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid key={2} item>
                <Card
                  sx={{
                    // width: 400,
                    // height: 570,
                    width: { xs: 305, sm: 400 },
                    height: { xs: 'auto', sm: 570 },
                    borderRadius: '10',
                    boxShadow: 6,
                  }}
                >
                  <CardMedia
                    sx={{ height: 267, width: 'auto ' }}
                    image={Blog2}
                  />
                  <Box p={2}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        fontSize={20}
                        component="div"
                        fontWeight={600}
                      >
                        Zoho Blogs
                      </Typography>
                      <Typography
                        mt={2}
                        fontSize={14}
                        color="#757575"
                        fontWeight={500}
                      >
                        {
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        }
                      </Typography>
                      <Button sx={{ mt: 2 }} color="secondary">
                        {'Read our blogs here >>'}
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
              <Grid key={3} item>
                <Card
                  sx={{
                    // width: 400,
                    // height: 570,
                    width: { xs: 305, sm: 400 },
                    height: { xs: 'auto', sm: 570 },
                    borderRadius: '10',
                    boxShadow: 6,
                  }}
                >
                  <CardMedia
                    sx={{ height: 267, width: 'auto ' }}
                    image={Blog3}
                  />
                  <Box p={2}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        fontSize={20}
                        component="div"
                        fontWeight={600}
                      >
                        Zoho Forum
                      </Typography>
                      <Typography
                        mt={2}
                        fontSize={14}
                        color="#757575"
                        fontWeight={500}
                      >
                        {
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                        }
                      </Typography>
                      <Button sx={{ mt: 2 }} color="secondary">
                        {'Join the Forum >>'}
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Blog;
