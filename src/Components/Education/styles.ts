import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

export const EducationContainer = styled(Box)`
  --container-width:100%;  
  --container-display:block;
  --container-padding:24px 0;
  
  &.MuiBox-root {
    display:var(--container-display);
    width:var(--container-width);
    padding:var(--container-padding);
  }
`;

export const Title = styled(Typography)`
  --container-title-font-size: 24px;
  --container-title-font-weight:700;

  &.MuiTypography-root {
    font-size:var(--container-title-font-size);
    font-weight:var(--container-title-font-weight);
  }
`;

export const ContentsBox = styled(Box)`
  --project-name-width:100%;  
  --project-name-display:flex;
  --project-name-padding:8px 16px;
  --project-name-border-radius:8px;
  --project-name-background:rgba( 255, 255, 255, 0.13 );

  &.MuiBox-root {
    display:var(--project-name-display);
    justify-content:space-between;
    align-items:flex-start;
    width:calc(var(--project-name-width) - 32px);
    padding:var(--project-name-padding);
    background-color:var(--project-name-background);
    border-radius:var(--project-name-border-radius);
    margin: 8px 0;
    flex-direction:column;
    // padding-bottom: 12px;
  }
`;

export const EducationDate = styled.span`
  padding: 4px 6px;
  border-radius:4px;
  font-size:14px;
  font-weight:700;
  line-height:1;
  background-color: rgba( 255, 255, 255, 0.2 );
  margin-right:6px;
`;
