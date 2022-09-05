import styled from 'styled-components';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)`
  --main-container-padding: 2rem;
  --main-container-width: inherit;

  &.MuiBox-root {
    width:var(--main-container-width);
    padding: var(--main-container-padding);
  }
`;

export const empty = '';
