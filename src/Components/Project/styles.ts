import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const ProjectContainer = styled(Box)`
  --container-width:100%;  
  --container-display:block;
  --container-padding:24px 0;

  &.MuiBox-root {
    display:var(--container-display);
    width:var(--container-width);
    padding:var(--container-padding);
  }
`;

export const TitleBox = styled(Box)`
  &.MuiBox-root {
    display:flex;
    justify-content:flex-start;
    align-items:center;
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
