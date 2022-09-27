import React from 'react';
import dompurify from 'dompurify';
import styled from 'styled-components';
import { Box } from '@mui/material';

const CustomBox = styled(Box)`
  ul, li {
    margin:8px 12px;
    padding:0;
    font-size:14px;
    line-height:16px;
  }

  hr {
    height: 1px;
    background-color: gray;
    border: none;
  }
`;

export const Sanitizer = ({ contents } : { contents : string }) => {
  const sanitizer = dompurify.sanitize;
  return (
    // eslint-disable-next-line
    <CustomBox dangerouslySetInnerHTML={{ __html: sanitizer(contents) }} />
  );
};

export default Sanitizer;
