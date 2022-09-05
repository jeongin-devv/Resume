import { Box } from '@mui/material';
import styled from 'styled-components';

export const CustomContainer = styled(Box)`
  --container-width:100%;  
  --container-display:block;
  
  display:var(--container-display);
  width:var(--container-width);

  @media screen and (min-width:768px) and (max-width: 1023px) {
    /* Tablet */
  }
  @media screen and (max-width:767px){ 
    /* Mobile */
  }
  &.MuiBox-root {
    display:var(--container-display);
    width:var(--container-width);
  }
`;

export const Title = styled(Box)`
  --container-title-width:100px;
  --container-title-font-size: 24px;
  --container-title-font-weight:700;

  @media screen and (min-width:768px) and (max-width: 1023px) {
    /* Tablet */
  }
  @media screen and (max-width:767px){ 
    /* Mobile */
  } 
  &.MuiBox-root {
    font-size:var(--container-title-font-size);
    font-weight:var(--container-title-font-weight);
  }
`;

export const Contents = styled(Box)`

`;
