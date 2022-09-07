import styled from 'styled-components';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)`
  --main-container-padding: 2rem;
  --main-container-width: 100vw;
  --main-container-max-width:1024px;

  &.MuiBox-root {
    width:var(--main-container-width);
    max-width: var(--main-container-max-width);
    padding: var(--main-container-padding);
  }
`;

export const empty = '';
