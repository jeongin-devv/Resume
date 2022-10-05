import styled from 'styled-components';
import { Box, Link, Typography } from '@mui/material';

export const ProfileContainer = styled(Box)`
  --container-width:100%;  
  --container-display:flex;

  &.MuiBox-root {
    display:var(--container-display);
    width:var(--container-width);
  }
`;

export const ProfilePhoto = styled(Box)`
  &.MuiBox-root {
    display: flex;
    justify-content: center;
    align-items: center;
    width:25%;
    min-width:150px;
  }
`;

export const ProfileContents = styled(Box)`
  &.MuiBox-root {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction:column;
    padding-left:24px;
    flex-wrap: nowrap;
    height:200px;
  }
`;

export const ProfileName = styled(Typography)`
  &.MuiTypography-root{
    font-size: 24px;
    font-weight:700;
    padding-top:8px;
    padding-bottom:4px;
  }
`;

export const ProfileLabel = styled.span`
  font-size: 16px;
  margin-left:8px;
  font-weight:400;
`;

export const ProfileAddress = styled(Box)`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
`;

export const ProfileLink = styled(Link)`
  &.MuiLink-root {
    color:white;
    text-decoration:underline;
  }
`;

export const ProfileDate = styled(Typography)`
&.MuiTypography-root{
  position:relative;
  right:0;
  margin-top:160px;
  font-size: 12px;
  font-weight:700;
  float:right;
}
`;

export const LabelSpan = styled.span`
  padding:2px 4px;
  background-color:rgba( 255,255,255,0.13 );
`;
