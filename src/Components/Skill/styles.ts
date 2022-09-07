import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const SkillContainer = styled(Box)`
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

export const HoverQuestion = styled(Box)`
  &.MuiBox-root {
    display:flex;
    justify-content:center;
    align-items:center;
    width:24px;
    height:24px;
    line-height:24px;
    font-size:20px;
    background-color:white;
    color:black;
    border-radius:50%;
    margin-left:8px;
  }
`;

export const HoverBox = styled(Box)`
  &.MuiBox-root {
    position:absolute;
    margin-left:100px;
    background-color:white;
    padding:8px 16px;
    border-radius:20px;
  }
  & .MuiTypography-root {
    color:black;
    font-size:12px;
  }
`;

export const SkillBox = styled(Box)`
  &.MuiBox-root {
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:16px 0;
  }
  & .MuiGrid-item{
    display:flex;
    justify-content:center;
    align-items:center;
    // padding:0 !important;
  }
`;

export const SkillName = styled(Box)`
  &.MuiBox-root {
    width:150px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export const SkillList = styled.ul`

`;

export const SkillLevel = styled.span`

`;
