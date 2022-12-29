import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography, createTheme, ThemeProvider } from '@mui/material';
import ZohoCampaign from '../images/zohocampaigns.png';
import ZohoSites from '../images/zohosites.png';
import ZohoSalesIq from '../images/zohosalesiq.png';
import ZohoBookings from '../images/zohobookings.png';
import ZohoCRM from '../images/zohocrm.png';
import ZohoCreator from '../images/zohocreater.png';
import ZohoBooks from '../images/zohobooks.png';
import ZohoForms from '../images/zohoforms.png';
import ZohoSign from '../images/zohosign.png';
import ZohoMail from '../images/zohomail.png';
import ZohoDesk from '../images/zohodesk.png';
import ZohoRecruit from '../images/zohorecruit.png';

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

const ZohoSection = () => {
  return (
    <Box component="section" sx={{ overflow: 'hidden', bgcolor: '#F4F6FC' }}>
      <ThemeProvider theme={aboutColor}>
        <Container sx={{ mb: 2 }}>
          <Typography
            // fontSize={42}
            color="primary"
            align="center"
            mt={8}
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: 38,
                lg: 40,
                xl: 48,
              },
            }}
          >
            We are a passionate and dedicated
          </Typography>
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
          >
            Zoho&nbsp;
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
            Consulting Company
          </Typography>
          <Typography
            // maxWidth={'80%'}
            fontSize={16}
            // color={'#757575'}
            color={'#757575'}
            mt={2}
            ml={3}
            align={'center'}
            textAlign={'center'}
          >
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
            }
          </Typography>
        </Container>
        <Box mt={5}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} mt={3}>
              <Grid container justifyContent="center" spacing={8}>
                <Grid key={1} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoCampaign}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Campaigns
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Campaigns is an email marketing automation product that helps you reach your subscribers with the right message at the right time.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={2} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoSites}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Sites
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Sites is an intuitive, drag-and-drop website builder. Create beautiful websites with our elements and pre-built sections.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={3} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoSalesIq}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Sales IQ
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
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
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoBookings}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Bookings
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Bookings syncs your calendars while letting customers self-schedule and pay for appointments. Say hello to smart scheduling!'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={5} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoCRM}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho CRM
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'CRM is an approach that helps businesses improve existing customer relationships and acquire new customers faster.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={6} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoCreator}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Creator
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Creator is a cloud software to create custom applications on your own without the need for any coding experience.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={8} mt={1}>
                <Grid key={7} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoBooks}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Books
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Books is your one-stop platform for managing your accounting tasks and organizing your transactions.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={8} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoForms}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Forms
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Forms is an online form builder that backs up data on the cloud. With a drag-and-drop form builder that is responsive on all mobile devices.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={9} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoSign}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Sign
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Sign helps you sign business documents directly from other popular Zoho apps and third-party apps.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center" spacing={8} mt={1} mb={3}>
                <Grid key={10} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoMail}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Mail
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Mail is a secure and reliable business email solution tailor-made for your organization’s communication needs.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={11} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoDesk}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Desk
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Desk is a cloud-based help desk solution from Zoho Corporation, catering to businesses of all sizes like customer support tickets and portals.'
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid key={12} item>
                  <Box sx={{ height: 247, width: 347 }}>
                    <Box sx={{ m: 1.5 }}>
                      <img
                        src={ZohoRecruit}
                        style={{ height: 80, width: 80 }}
                        alt="Logo"
                      />
                      <Typography
                        fontSize={20}
                        color="primary"
                        mt={2}
                        fontWeight={600}
                      >
                        Zoho Recruit
                      </Typography>
                      <Typography
                        // maxWidth={'80%'}
                        fontSize={14}
                        color={'#757575'}
                        mt={1}
                        // ml={3}
                        align={'center'}
                        textAlign={'center'}
                        fontWeight={500}
                      >
                        {
                          'Zoho Recruit is an all-in-one Applicant Tracking System (ATS) and recruitment software for staffing agencies and recruitment professionals.'
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

export default ZohoSection;
