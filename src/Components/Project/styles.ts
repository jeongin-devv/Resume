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
    display:inline-flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction: row;
    flex-wrap: wrap;
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

export const ProjectContent = styled(Box)`
  --project-name-width:100%;  
  --project-name-display:flex;
  --project-name-padding:8px 16px;
  --project-name-border-radius:16px;
  --project-name-background:rgba( 255, 255, 255, 0.13 );

  &.MuiBox-root {
    display:var(--project-name-display);
    justify-content:space-between;
    align-items:center;
    width:calc(var(--project-name-width) - 32px);
    padding:var(--project-name-padding);
    background-color:var(--project-name-background);
    border-radius:var(--project-name-border-radius);
    margin: 16px 0;
    cursor:pointer;
  }

  &.MuiBox-root:hover {
    background-color:rgba( 255, 255, 255, 0.3 )
  }
`;

export const ProjectDate = styled.span`
  padding: 4px 8px;
  border-radius:4px;
  font-size:16px;
  font-weight:700;
  line-height:20px;
  background-color: rgba( 255, 255, 255, 0.2 );
  margin-right:16px;
`;

export const ProjectName = styled(Typography)`
  --project-name-font-size: 16px;
  --project-name-font-weight:700;

  &.MuiTypography-root {
    font-size:var(--project-name-font-size);
    font-weight:var(--project-name-font-weight);
  }
`;

export const ModalBox = styled(Box)`
  &.MuiBox-root {
    display:inline-block;
    overflow:scroll;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100vw - 100px);
    max-width:1024px;
    max-height:80vh;
    background-color: #333333;
    padding:24px 20px;
    border-radius:16px;
    -webkit-tap-highlight-color:transparent;
  }

  &.MuiBox-root:active {
    outline:none;
  }
  &.MuiBox-root:focus {
    outline:none;
  }
`;

export const ColorSpan = styled.span<{randomColor : any}>`
  background-color: ${(props) => props.randomColor};
  padding:4px 8px;
  line-height:14px;
  font-size:12px;
  font-weight:700;
  border-radius:4px;
  margin:2px;
`;
