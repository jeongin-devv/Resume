import React from 'react';
import { Typography } from '@mui/material';
import { EducationType } from './Educations';
import { ContentsBox, EducationDate } from './styles';

export default ({ education } : { education : EducationType }) => (
  <ContentsBox>
    <div style={{ marginBottom: '6px' }}>
      <Typography sx={{ fontWeight: '700' }}>
        <EducationDate>{education.date}</EducationDate>
        {education.title}
      </Typography>
    </div>
    {education.descriptions.map((description) => (
      <Typography
        sx={{
          paddingLeft: '8px',
          color: 'rgba(255, 255, 255, 0.8);',
          fontSize: '14px',
        }}
      >
        {description}
      </Typography>
    ))}
  </ContentsBox>
);
