import styled from 'styled-components';
import { Accordion, Box, Typography } from '@mui/material';

export const CareerContainer = styled(Box)`
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

export const CareerAccordion = styled(Accordion)`
  &.MuiAccordion-root{
    margin-top:16px;
    border-radius:16px !important;
    background-color: rgba( 255, 255, 255, 0.13 );
    color: #FFFFFF;
  }
`;

export const CareerSpan = styled.span`
  padding: 4px 16px;
  border-radius:16px;
  font-size:16px;
  font-weight:700;
  line-height:20px;
  background-color: rgba( 255, 255, 255, 0.2 );
  margin-right:16px;
`;

export const CareerDot = styled.div`
  width:4px;
  height:4px;
  border-radius:4px;
  background-color: rgba( 255, 255, 255, 0.8 );
  margin-right:6px;
`;

export const CareerLine = styled(Box)`
  &.MuiBox-root {
    display:flex;
    justify-content:flex-start;
    align-items:center;
    
  }
`;
