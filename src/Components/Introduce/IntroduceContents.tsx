import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  contents : string[];
}

export default ({ contents } : Props) => (
  <>
    {contents.map((text, index) => (
      index === 1
        ? (
          <Typography>{text}</Typography>)
        : (
          <>
            <br />
            <Typography>
              {text}
            </Typography>
          </>
        )))}
  </>
);
