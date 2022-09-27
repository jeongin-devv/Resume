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
    display:inline-block;
    position:relative;
  }

  div {
    width:80px;
    position:absolute;
    background-color:white;
    background-color:white;
    padding:8px 16px;
    border-radius:20px;
    margin-top:-45px;
    margin-left:10px;
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
`;

export const SkillList = styled(Box)`
  --container-columns:1fr 1fr 1fr;

  @media (max-width: 800px) {
    --container-columns:1fr 1fr;
  }

  &.MuiBox-root {
    width:75%;
    display:grid;
    grid-template-columns: var(--container-columns);
    text-align:center;
  }
`;

export const SkillName = styled(Box)`
  &.MuiBox-root {
    width:25%;
    display:flex;
    justify-content:center;

    @media (max-width: 800px) {
      justify-content:flex-start;
    }
    align-items:center;
  }

  & .MuiTypography-root {
    font-size:20px;

    @media (max-width: 800px) {
      font-size:16px;
    }
  }
`;

export const Skill = styled(Box)`
  &.MuiBox-root {
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:4px 0;
    font-size:14px;
  }
`;

export const SkillLevel = styled.span<{level : number}>`
  ${(props) => {
    if (props.level === 3) {
      return 'background-color:#4169E1;';
    }
    if (props.level === 2) {
      return 'background-color:#808080;';
    }
    return 'background-color:#A9A9A9;';
  }}
  padding:4px 8px;
  margin-right:4px;
  border-radius:16px;
  font-weight: 700;
`;

export const SkillDot = styled.div`
  width:4px;
  height:4px;
  border-radius:4px;
  background-color: #FFFFFF;
  margin-right:6px;
`;
