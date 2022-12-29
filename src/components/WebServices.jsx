import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography, createTheme, ThemeProvider } from '@mui/material';

import Icon1 from '../images/icon.svg';
import Icon2 from '../images/icon1.svg';
import Icon3 from '../images/icon2.svg';
import Icon4 from '../images/icon3.svg';
import Icon5 from '../images/icon4.svg';
import Icon6 from '../images/icon5.svg';
import Icon7 from '../images/icon6.svg';
import Icon8 from '../images/icon7.svg';
import Icon9 from '../images/icon8.svg';

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

const WebServices = () => {
  return (
    <Box component="section" sx={{ overflow: 'hidden', bgcolor: '#eeeeee' }}>
      <ThemeProvider theme={aboutColor}>
        <Container sx={{ mb: 2 }}>
          <Typography
            // fontSize={42}
            color="primary"
            sx={{
              display: 'inline-block',
              fontWeight: 600,
              fontSize: {
                xs: 38,
                lg: 40,
                xl: 48,
              },
            }}
            mt={8}
          >
            Web&nbsp;
          </Typography>
          <Typography
            // fontSize={42}
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
            Services
          </Typography>
          <Typography
            fontSize={16}
            color={'#757575'}
            mt={2}
            ml={3}
            align={'center'}
            textAlign={'center'}
          >
            {
              "Your Search Is Over Because We Are An Only-Stop Store For All Of Your Web Design And Development Needs. We're A Decade-Old PSD Conversion Company That Can Help You With Almost Whatever You Need To Expand Your Business And Gain A Competitive Advantage. We Can Boost Your Revenues And Convert Your Leads Into Customers. Let's Make The Best Website We Can For You."
            }
          </Typography>
        </Container>
        <Box mt={5}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} mt={3}>
              <Grid container justifyContent="center" spacing={8}>
                <Grid key={1} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '10%',
                      borderTopRightRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon1}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Web Design & Development
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        sx={{ fontWeight: 500 }}
                      >
                        {
                          'Zoho Campaigns is an email marketing automation product that helps you reach your subscribers with the right message at the right time.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={2} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomRightRadius: '10%',
                      borderTopLeftRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon2}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Mobile App Development
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        sx={{ fontWeight: 500 }}
                      >
                        {
                          'Zoho Sites is an intuitive, drag-and-drop website builder. Create beautiful websites with our elements and pre-built sections.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={3} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '10%',
                      borderTopRightRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon3}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Ecommerce Solutions
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                      >
                        {
                          'Zoho SalesIQ is a customer engagement platform with live chat, website visitor tracking, and analytics capabilities that helps you know your visitors'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={8} mt={1}>
                <Grid key={4} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '10%',
                      borderTopRightRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon4}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Search Engine Optimization
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                      >
                        {
                          'Zoho Bookings syncs your calendars while letting customers self-schedule and pay for appointments. Say hello to smart scheduling!'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={5} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomRightRadius: '10%',
                      borderTopLeftRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon5}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Social Media Marketing
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                      >
                        {
                          'CRM is an approach that helps businesses improve existing customer relationships and acquire new customers faster.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={6} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '10%',
                      borderTopRightRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon6}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Content Marketing
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                      >
                        {
                          'Zoho Creator is a cloud software to create custom applications on your own without the need for any coding experience.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={8} mt={1} mb={6}>
                <Grid key={7} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '10%',
                      borderTopRightRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon7}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Python Development
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                      >
                        {
                          'Zoho Books is your one-stop platform for managing your accounting tasks and organizing your transactions.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={8} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomRightRadius: '10%',
                      borderTopLeftRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon8}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Node JS
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                      >
                        {
                          'Zoho Forms is an online form builder that backs up data on the cloud. With a drag-and-drop form builder that is responsive on all mobile devices.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={9} item>
                  <Box
                    sx={{
                      // height: 247,
                      // width: 347,
                      width: { xs: 305, sm: 347 },
                      height: { xs: 'auto', sm: 247 },
                      boxShadow: 6,
                      p: 3,
                      backgroundColor: '#ffffff',
                      borderBottomLeftRadius: '10%',
                      borderTopRightRadius: '10%',
                    }}
                  >
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={Icon9}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        sx={{ fontWeight: 600 }}
                      >
                        Database Management
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                      >
                        {
                          'Zoho Sign helps you sign business documents directly from other popular Zoho apps and third-party apps.'
                        }
                      </Typography>
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

export default WebServices;
