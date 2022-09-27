import React, { useState } from 'react';
import { Modal, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Sanitizer, RandomColor } from 'Util';
import { ProjectType } from './Projects';
import {
  ProjectContent, TitleBox, ColorSpan,
  ProjectDate, ProjectName, ModalBox,
} from './styles';

export default ({ project } : { project: ProjectType }) => {
  const [modalState, setModalState] = useState(false);
  const modalOpen = () => setModalState(true);
  const modalClose = () => setModalState(false);

  return (
    <>
      <ProjectContent onClick={modalOpen}>
        <TitleBox>
          <ProjectName>{project.title}</ProjectName>
        </TitleBox>
        <OpenInNewIcon sx={{ width: '16px' }} />
      </ProjectContent>
      <Modal open={modalState} onClose={modalClose}>
        <ModalBox onClick={modalClose}>
          <ProjectDate>{project.duration}</ProjectDate>
          <Typography sx={{ fontSize: '20px', fontWeight: '700', marginTop: '8px' }}>{project.title}</Typography>
          <TitleBox sx={{ padding: '8px 0' }}>
            {project.stack.map((text) => (
              <ColorSpan randomColor={RandomColor}>{text}</ColorSpan>))}
          </TitleBox>
          <Sanitizer contents={project.contents} />
        </ModalBox>
      </Modal>
    </>
  );
};
