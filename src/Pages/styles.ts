import styled from 'styled-components';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)`
  --main-container-padding: 2rem;
  --main-container-max-width:800px;

  &.MuiBox-root {
    max-width: var(--main-container-max-width);
    padding: var(--main-container-padding);
  }
`;

export const empty = '';
