import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LatestDate from 'Util/LatestDate';

const Copyright = () => {
  const copyrightName = 'Jeongin Oh';
  const domain = 'https://github.com/jeongin-devv';
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href={domain} target="_blank">
        {copyrightName}
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

const Footer = () => {
  const inputDate = {
    year: 2023,
    month: 9,
    date: 4,
  };
  const date = LatestDate(inputDate);

  return (
    <Box
      component="footer"
      sx={{
        py: 1, borderTopStyle: 'double', borderTopWidth: 3, borderColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="gray"
          component="p"
          sx={{ fontStyle: 'italic', fontSize: '14px' }}
        >
          {`Latest Updated : ${date.date} + ${date.day}`}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
