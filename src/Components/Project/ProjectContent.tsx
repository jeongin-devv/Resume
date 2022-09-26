import React, { useState } from 'react';
import { Modal, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { projects } from './Projects';
import {
  ProjectContent, TitleBox, ColorSpan,
  ProjectDate, ProjectName, ModalBox,
} from './styles';

export default () => {
  const [modalState, setModalState] = useState(true);
  const modalOpen = () => setModalState(true);
  const modalClose = () => setModalState(true);
  const randomColor = () => `hsl(${parseInt(`${(Math.random() * 24)}`, 10) * 15}, 16%, 57%)`;

  return (
    <>
      <ProjectContent onClick={modalOpen}>
        <TitleBox>
          <ProjectDate>22.09 ~ </ProjectDate>
          <ProjectName>Project Name</ProjectName>
        </TitleBox>
        <OpenInNewIcon />
      </ProjectContent>
      <Modal open={modalState} onClose={modalClose}>
        <ModalBox>
          <Typography>금융 편집샵 Nanci</Typography>
          <Typography>22.09 ~ </Typography>
          <Typography>
            {projects[0].stack.map((text) => (
              <ColorSpan randomColor={randomColor}>{text}</ColorSpan>))}
          </Typography>
          <Typography>기타</Typography>
          <div // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: projects[0].contents }} />
        </ModalBox>
      </Modal>
    </>
  );
};
