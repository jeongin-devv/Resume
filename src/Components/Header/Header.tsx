import * as React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import SectionMenu from '@mui/material/Link';

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <Toolbar sx={{ borderBottom: 1, borderColor: 'white' }}>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="left"
        noWrap
        sx={{ flex: 1 }}
      >
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          {title}
        </Link>
      </Typography>
    </Toolbar>
  );
};

export default Header;
