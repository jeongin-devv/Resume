import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SectionMenu from '@mui/material/Link';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const Header = (props: HeaderProps) => {
  const { sections, title } = props;
  const navigation = useNavigate();

  const sectionHandler = (event : React.MouseEvent, url : string) => {
    event.preventDefault();
    navigation(url);
  };

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'white' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            {title}
          </Link>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: 'space-around',
          overflowX: 'auto',
          borderBottomWidth: 3,
          borderBottomStyle: 'double',
          borderColor: 'white',
        }}
      >
        {sections.map((section) => (
          <SectionMenu
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
            onClick={(event : React.MouseEvent) => { sectionHandler(event, section.url); }}
          >
            {section.title}
          </SectionMenu>
        ))}
      </Toolbar>
    </>
  );
};

export default Header;
