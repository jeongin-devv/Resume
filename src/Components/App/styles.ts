import styled from 'styled-components';

export const AppContainer = styled.div`
  --app-container-height: calc(100vh - 10.3125rem);
`;

export const AppContents = styled.div`
  width:100vw;
  padding:0;
  height:var(--app-container-height);
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display:none;
  }
`;
