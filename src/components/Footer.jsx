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
});

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: '#153150',
        height: 612,
      }}
    >
      <ThemeProvider theme={aboutColor}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12} mb={12} mt={16}>
              <Grid container justifyContent="center" spacing={15}>
                <Grid key={0} item>
                  <Typography fontSize={22} sx={{ color: '#fff' }}>
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
                          }}
                        />
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
                <Grid key={1} item>
                  <Typography fontSize={22} sx={{ color: '#fff' }}>
                    Services
                  </Typography>
                  <List sx={{ ml: -2 }}>
                    <ListItem>
                      <ListItemText
                        primary="• Web Design & Development"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
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
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="• UI/UX Design"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="• Digital Marketing"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid key={2} item>
                  <Typography fontSize={22} sx={{ color: '#fff' }}>
                    Industries
                  </Typography>
                  <List sx={{ ml: -2 }}>
                    <ListItem>
                      <ListItemText
                        primary="• E-commerce"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="• School Management"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="• Food Delivery"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="• IT Fields"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="• Real Estate"
                        primaryTypographyProps={{
                          color: '#fff',
                          fontSize: 16,
                        }}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid key={3} item>
                  <Box component="div" maxWidth={416}>
                    <Typography fontSize={22} sx={{ color: '#fff' }}>
                      Contact Info
                    </Typography>
                    <RoomIcon
                      sx={{ color: '#ffffff', mt: 2 }}
                      fontSize="medium"
                    />
                    <Typography
                      component={'span'}
                      fontSize={16}
                      sx={{ color: '#fff' }}
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
                      sx={{ color: '#fff' }}
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
                      ontSize={16}
                      sx={{ color: '#fff' }}
                    >
                      {'+123 456 7890'}
                    </Typography>
                    <Box component={'div'} sx={{ mt: 3 }}>
                      <Box component={'span'}>
                        <Link href="#">
                          <img
                            src={Fb}
                            sx={{ height: 20, width: 20 }}
                            alt="Pic"
                          />
                        </Link>
                      </Box>
                      <Box component={'span'} ml={3}>
                        <Link href="#">
                          <img
                            src={Twitter}
                            sx={{ height: 20, width: 20 }}
                            alt="Pic"
                          />
                        </Link>
                      </Box>
                      <Box component={'span'} ml={3}>
                        <Link href="#">
                          <img
                            src={LinkedIn}
                            sx={{ height: 20, width: 20 }}
                            alt="Pic"
                          />
                        </Link>
                      </Box>
                      <Box component={'span'} ml={3}>
                        <Link href="#">
                          <img
                            src={Instagram}
                            sx={{ height: 20, width: 20 }}
                            alt="Pic"
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
          <Box component={'div'}>
            <Typography fontSize={16} color="#fff" sx={{ textAlign: 'center' }}>
              {'© Copyright Business Value Inc 2022-2023'}
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Footer;
