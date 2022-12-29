import React from 'react';

// import BackgroundImage from '../images/vector-1.svg';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import Fb from '../images/vector9.svg';
import Twitter from '../images/vector10.svg';
import LinkedIn from '../images/vector11.svg';
import Instagram from '../images/vector12.svg';

import {
  Box,
  createTheme,
  ThemeProvider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Divider,
} from '@mui/material';
import { Container } from '@mui/system';

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
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
      color: '#ffffff',
    },
  },
  // breakpoints:{
  //   values: {
  //     mobiles: 0,
  //     tablet: 600
  //   }
  // }
});

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: '#153150',
        height: 'auto',
      }}
    >
      <ThemeProvider theme={aboutColor}>
        <Box sx={{ flexGrow: 1 }}>
          <Container>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid
                item
                xs={12}
                mb={12}
                // mt={16}
                sx={{
                  mt: {
                    xs: 4,
                    md: 14,
                  },
                }}
              >
                <Grid container justifyContent="center" spacing={3}>
                  <Grid md={3} sx={{ width: '100%' }} key={0} item>
                    <Typography
                      fontSize={22}
                      sx={{ color: '#fff', fontWeight: 700 }}
                    >
                      Quick Links
                    </Typography>
                    <List sx={{ ml: -2 }}>
                      <ListItem>
                        <Link href="#">
                          <ListItemText
                            primary="• About"
                            primaryTypographyProps={{
                              color: '#fff',
                              fontSize: 16,
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <ListItemText
                            primary="• Top Services"
                            primaryTypographyProps={{
                              color: '#fff',
                              fontSize: 16,
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <ListItemText
                            primary="• Portfolio"
                            primaryTypographyProps={{
                              color: '#fff',
                              fontSize: 16,
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <ListItemText
                            primary="• Career"
                            primaryTypographyProps={{
                              color: '#fff',
                              fontSize: 16,
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <ListItemText
                            primary="• Contact"
                            primaryTypographyProps={{
                              color: '#fff',
                              fontSize: 16,
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid md={3} sx={{ width: '100%' }} key={1} item>
                    <Typography
                      fontSize={22}
                      sx={{ color: '#fff', fontWeight: 700 }}
                    >
                      Services
                    </Typography>
                    <List sx={{ ml: -2 }}>
                      <ListItem>
                        <ListItemText
                          primary="• Web Design & Development"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          <ListItemText
                            primary="• Mobile App Development"
                            primaryTypographyProps={{
                              color: '#fff',
                              fontSize: 16,
                              fontWeight: 500,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Software Development"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• UI/UX Design"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Digital Marketing"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid md={3} sx={{ width: '100%' }} key={2} item>
                    <Typography
                      fontSize={22}
                      sx={{ color: '#fff', fontWeight: 700 }}
                    >
                      Industries
                    </Typography>
                    <List sx={{ ml: -2 }}>
                      <ListItem>
                        <ListItemText
                          primary="• E-commerce"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• School Management"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Food Delivery"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• IT Fields"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="• Real Estate"
                          primaryTypographyProps={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid md={3} sx={{ width: '100%' }} key={3} item>
                    <Box component="div" maxWidth={416}>
                      <Typography
                        fontSize={22}
                        sx={{ color: '#fff', fontWeight: 700 }}
                      >
                        Contact Info
                      </Typography>
                      <RoomIcon
                        sx={{ color: '#ffffff', mt: 2 }}
                        fontSize="medium"
                      />
                      <Typography
                        component={'span'}
                        fontSize={16}
                        sx={{ color: '#fff', fontWeight: 500 }}
                      >
                        {
                          ' Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua.'
                        }
                      </Typography>

                      <br />
                      <EmailIcon
                        sx={{ color: '#ffffff', mt: 2.5 }}
                        fontSize="medium"
                      />
                      <Typography
                        component={'span'}
                        fontSize={16}
                        sx={{ color: '#fff', fontWeight: 500 }}
                      >
                        {' businessvalue@gmail.com'}
                      </Typography>

                      <br />
                      <PhoneIcon
                        sx={{ color: '#ffffff', mt: 2.5 }}
                        fontSize="medium"
                      />
                      <Typography
                        component={'span'}
                        fontSize={16}
                        sx={{ color: '#fff', fontWeight: 500 }}
                      >
                        {'+123 456 7890'}
                      </Typography>
                      <Box component={'div'} sx={{ mt: 3 }}>
                        <Box component={'span'}>
                          <Link href="#">
                            <img
                              src={Fb}
                              sx={{ height: 20, width: 20 }}
                              alt="Facebook"
                            />
                          </Link>
                        </Box>
                        <Box component={'span'} ml={3}>
                          <Link href="#">
                            <img
                              src={Twitter}
                              sx={{ height: 20, width: 20 }}
                              alt="Twitter"
                            />
                          </Link>
                        </Box>
                        <Box component={'span'} ml={3}>
                          <Link href="#">
                            <img
                              src={LinkedIn}
                              sx={{ height: 20, width: 20 }}
                              alt="LinkedIn"
                            />
                          </Link>
                        </Box>
                        <Box component={'span'} ml={3}>
                          <Link href="#">
                            <img
                              src={Instagram}
                              sx={{ height: 20, width: 20 }}
                              alt="Instagram"
                            />
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider
              variant="middle"
              style={{ background: '#ffffff' }}
              sx={{ mt: 3, mb: 3 }}
            />
            <Box sx={{ pb: 2 }}>
              <Typography
                fontSize={16}
                color="#fff"
                sx={{ textAlign: 'center', fontWeight: 500 }}
              >
                {'© Copyright Business Value Inc 2022-2023'}
              </Typography>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
