import React, { useState } from 'react';

import BackgroundImage from '../images/background.png';

import {
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
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
        // zIndex: 2,
      }}
    >
      <ThemeProvider theme={aboutColor}>
        {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}> */}
        {/* <Grid item xs={12} mt={8}> */}
        <Grid container justifyContent="center" spacing={8} mb={0} p={2}>
          <Grid md={6} key={1} item>
            <Box component="div" p={2} mt={8}>
              <Typography
                // fontSize={42}
                color="#ffffff"
                // mt={8}
                sx={{
                  mt: { xs: 0, sm: 0, md: 8 },
                  fontSize: { xs: 38, sm: 42 },
                  fontWeight: 600,
                }}
              >
                Why Choose Business Value?
              </Typography>
              <Box component="div" color="#ffffff" mt={3}>
                <Typography
                  // fontSize={32}
                  sx={{ fontSize: { xs: 28, sm: 32 }, fontWeight: 600 }}
                >
                  01.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 22, sm: 28 },
                    fontWeight: 400,
                  }}
                >
                  Proudly Serving North, Central, and South America Since 2012.
                </Typography>
                <Divider
                  style={{ background: '#ffffff' }}
                  sx={{ mt: 3, mb: 3 }}
                />
              </Box>
              <Box component="div" color="#ffffff">
                <Typography
                  // fontSize={32}
                  sx={{ fontSize: { xs: 28, sm: 32 }, fontWeight: 600 }}
                >
                  02.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 22, sm: 28 },
                    fontWeight: 400,
                  }}
                >
                  We Make Zoho Work For Your Business Needs
                </Typography>
                <Divider
                  style={{ background: '#ffffff' }}
                  sx={{ mt: 3, mb: 3 }}
                />
              </Box>
              <Box component="div" color="#ffffff">
                <Typography
                  sx={{ fontSize: { xs: 28, sm: 32 }, fontWeight: 600 }}
                >
                  03.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 22, sm: 28 },
                    fontWeight: 400,
                  }}
                >
                  A Top Tier Development Team
                </Typography>
                <Divider
                  style={{ background: '#ffffff' }}
                  sx={{ mt: 3, mb: 3 }}
                />
              </Box>
              <Box component="div" color="#ffffff">
                <Typography
                  sx={{ fontSize: { xs: 28, sm: 32 }, fontWeight: 600 }}
                >
                  04.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 22, sm: 28 },
                    fontWeight: 400,
                  }}
                >
                  We Are A Zoho Premium Partner
                </Typography>
                <Divider
                  style={{ background: '#ffffff' }}
                  sx={{ mt: 3, mb: 3 }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid md={6} key={2} item>
            {/* <Box p={3}> */}
            <Paper
              component="form"
              sx={{
                mt: 3,
                p: 1,
                mb: 8,
              }}
            >
              {/* <Container sx={{ mb: 2 }}> */}
              <Box component="div" ml={2}>
                <Typography
                  fontSize={28}
                  color="primary"
                  mt={5}
                  sx={{
                    fontWeight: 600,
                    display: 'inline-block',
                  }}
                >
                  Business Value&nbsp;
                </Typography>
                <Typography
                  fontSize={28}
                  color="secondary"
                  sx={{
                    fontWeight: 600,
                    display: 'inline-block',
                  }}
                >
                  Client Form
                </Typography>
              </Box>

              <Typography fontSize={16} color={'#757575'} ml={2}>
                {
                  'Please fill out this simple form to let us know how we can help with your Zoho Implementation.'
                }
              </Typography>

              <Box component="div" sx={{ m: 1 }}>
                <Typography fontSize={16} m={1}>
                  Name
                </Typography>
                <Box component="div">
                  <TextField
                    id="outlined-basic"
                    // sx={{ m: 1, width: '305px' }}
                    sx={{ m: 1 }}
                    label="First Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    // sx={{ m: 1, width: '305px' }}
                    sx={{ m: 1 }}
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
                    // sx={{ m: 1, width: '625px' }}
                    sx={{ m: 1 }}
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
                    // sx={{ m: 1, width: '305px' }}
                    sx={{ m: 1 }}
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
                    // sx={{ m: 1, width: '305px' }}
                    sx={{ m: 1 }}
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
                    // sx={{ m: 1, width: '625px' }}
                    sx={{ m: 1 }}
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
                    // sx={{ m: 1, width: '625px' }}
                    sx={{ m: 1 }}
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
                  <FormControl
                    sx={{ width: { xs: '305px', md: '345px' }, m: 1 }}
                  >
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
                  <FormControl
                    sx={{ width: { xs: '305px', md: '345px' }, m: 1 }}
                  >
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

              <Typography
                fontSize={14}
                m={2}
                sx={{ fontWeight: 500, color: '#757575' }}
              >
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
              {/* </Container> */}
            </Paper>
            {/* </Box> */}
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* </Grid> */}
      </ThemeProvider>
    </Box>
  );
};

export default FormSection;
