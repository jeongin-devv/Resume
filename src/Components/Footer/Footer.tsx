import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = () => {
  const copyrightName = 'Jeongin Oh';
  const domain = 'https://github.com/jeongin-devv';
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href={domain}>
        {copyrightName}
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

interface FooterProps {
  description: string;
  title: string;
}

const Footer = (props: FooterProps) => {
  const { description, title } = props;

  return (
    <Box
      component="footer"
      sx={{
        py: 3, borderTopStyle: 'double', borderTopWidth: 3, borderColor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" sx={{ marginBottom: 0 }} gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="gray"
          component="p"
          sx={{ textDecoration: 'underline' }}
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
