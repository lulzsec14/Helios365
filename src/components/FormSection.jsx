import React, { useState } from 'react';

import BackgroundImage from '../images/background.png';

import {
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
  Container,
  TextField,
  Box,
  Grid,
  Divider,
  Button,
  Select,
  MenuItem,
  FormControl,
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

const FormSection = () => {
  const [budget, setBudget] = useState('');

  const [region, setRegion] = useState('');

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: 2,
      }}
    >
      <ThemeProvider theme={aboutColor}>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} mt={8}>
            <Grid container justifyContent="center" spacing={8} mb={8}>
              <Grid key={1} item>
                <Box component="div" p={2} mt={8}>
                  <Typography fontSize={42} color="#ffffff" mt={8}>
                    Why Choose Business Value?
                  </Typography>
                  <Box component="div" color="#ffffff" mt={3}>
                    <Typography fontSize={32}>01.</Typography>
                    <Typography fontSize={28} fontWeight={'Regular'}>
                      Proudly Serving North, Central, and South America Since
                      2012.
                    </Typography>
                    <Divider
                      style={{ background: '#ffffff' }}
                      sx={{ mt: 3, mb: 3 }}
                    />
                  </Box>
                  <Box component="div" color="#ffffff">
                    <Typography fontSize={32}>02.</Typography>
                    <Typography fontSize={28}>
                      We Make Zoho Work For Your Business Needs
                    </Typography>
                    <Divider
                      style={{ background: '#ffffff' }}
                      sx={{ mt: 3, mb: 3 }}
                    />
                  </Box>
                  <Box component="div" color="#ffffff">
                    <Typography fontSize={32}>03.</Typography>
                    <Typography fontSize={28}>
                      A Top Tier Development Team
                    </Typography>
                    <Divider
                      style={{ background: '#ffffff' }}
                      sx={{ mt: 3, mb: 3 }}
                    />
                  </Box>
                  <Box component="div" color="#ffffff">
                    <Typography fontSize={32}>04.</Typography>
                    <Typography fontSize={28}>
                      We Are A Zoho Premium Partner
                    </Typography>
                    <Divider
                      style={{ background: '#ffffff' }}
                      sx={{ mt: 3, mb: 3 }}
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid key={2} item>
                <Box p={3}>
                  <Paper
                    component="form"
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Container sx={{ mb: 2 }}>
                      <Box component="div" ml={2}>
                        <Typography
                          fontSize={28}
                          color="primary"
                          mt={5}
                          style={{ display: 'inline-block' }}
                        >
                          Business Value&nbsp;
                        </Typography>
                        <Typography
                          fontSize={28}
                          color="secondary"
                          style={{ display: 'inline-block' }}
                        >
                          Client Form
                        </Typography>
                      </Box>

                      <Typography fontSize={16} color={'#424242'} ml={2}>
                        {
                          'Please fill out this simple form to let us know how we can help with your Zoho Implementation.'
                        }
                      </Typography>

                      <Box component="div" sx={{ m: 1 }}>
                        <Typography fontSize={16} m={1}>
                          Name
                        </Typography>
                        <Box component="div" sx={{}}>
                          <TextField
                            id="outlined-basic"
                            sx={{ m: 1, width: '305px' }}
                            label="First Name"
                            variant="outlined"
                          />
                          <TextField
                            id="outlined-basic"
                            sx={{ m: 1, width: '305px' }}
                            label="Second Name"
                            variant="outlined"
                          />
                        </Box>
                      </Box>

                      <Box component="div" sx={{ m: 1 }}>
                        <Typography fontSize={16} m={1}>
                          Email
                        </Typography>
                        <Box component="div" sx={{}}>
                          <TextField
                            id="outlined-basic"
                            sx={{ m: 1, width: '625px' }}
                            label="Email"
                            variant="outlined"
                          />
                        </Box>
                      </Box>

                      <Box
                        component="div"
                        sx={{ m: 1, display: 'flex', flexWrap: 'wrap' }}
                      >
                        <Box component="span">
                          <Typography fontSize={16} m={1}>
                            Phone
                          </Typography>
                          <TextField
                            id="outlined-basic"
                            sx={{ m: 1, width: '305px' }}
                            label="Phone"
                            variant="outlined"
                          />
                        </Box>
                        <Box component="span">
                          <Typography fontSize={16} m={1}>
                            Website
                          </Typography>
                          <TextField
                            id="outlined-basic"
                            sx={{ m: 1, width: '305px' }}
                            label="Phone"
                            variant="outlined"
                          />
                        </Box>
                      </Box>

                      <Box component="div" sx={{ m: 1 }}>
                        <Typography fontSize={16} m={1}>
                          Company
                        </Typography>
                        <Box component="div" sx={{}}>
                          <TextField
                            id="outlined-basic"
                            sx={{ m: 1, width: '625px' }}
                            label="First Name"
                            variant="outlined"
                          />
                        </Box>
                      </Box>

                      <Box component="div" sx={{ m: 1 }}>
                        <Typography fontSize={16} m={1}>
                          {'How can we help you?'}
                        </Typography>
                        <Box component="div" sx={{}}>
                          <TextField
                            id="outlined-basic"
                            sx={{ m: 1, width: '625px' }}
                            label="Text...."
                            multiline
                            rows={5}
                            variant="outlined"
                          />
                        </Box>
                      </Box>

                      <Box
                        component="div"
                        sx={{ m: 1, display: 'flex', flexWrap: 'wrap' }}
                      >
                        <Box component="span">
                          <Typography fontSize={16} m={1}>
                            Budget
                          </Typography>
                          <FormControl sx={{ width: '305px', m: 1 }}>
                            <Select
                              labelId="demo-simple-select-label1"
                              id="demo-simple-select"
                              value={budget}
                              label="Age"
                              onChange={handleBudgetChange}
                            >
                              <MenuItem value={'Option 1'}>Option 1</MenuItem>
                              <MenuItem value={'Option 2'}>Option 2</MenuItem>
                              <MenuItem value={'Option 3'}>Option 3</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Box component="span">
                          <Typography fontSize={16} m={1}>
                            Region
                          </Typography>
                          <FormControl sx={{ width: '305px', m: 1 }}>
                            <Select
                              labelId="demo-simple-select-label2"
                              id="demo-simple-select"
                              value={region}
                              label="Age"
                              onChange={handleRegionChange}
                            >
                              <MenuItem value={'Region 1'}>Region 1</MenuItem>
                              <MenuItem value={'Region 2'}>Region 2</MenuItem>
                              <MenuItem value={'Region 3'}>Region 3</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Box>

                      <Typography fontSize={14} m={2}>
                        {'We only work with clients in the Americas.'}
                      </Typography>

                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                          m: 2,
                          borderRadius: '0.5rem',
                          color: '#fff',
                          mb: 6,
                        }}
                      >
                        Book a Meeting
                      </Button>
                    </Container>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default FormSection;
