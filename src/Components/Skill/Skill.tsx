import { Typography } from '@mui/material';
import React, { useState } from 'react';
import SkillGrid from './SkillGrid';
import {
  SkillContainer, TitleBox, Title, HoverQuestion,
  HoverBox, SkillBox, SkillName,
} from './styles';

export default () => {
  const [isModal, setIsModal] = useState(false);
  const onMouseEnter = () => {
    setIsModal(true);
  };
  const onMouseLeave = () => {
    setIsModal(false);
  };
  return (
    <SkillContainer>
      <TitleBox>
        <Title>Skill</Title>
        <HoverQuestion
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >?
        </HoverQuestion>
        {isModal && (
          <HoverBox>
            <Typography sx={{ fontWeight: '700' }}>Level</Typography>
            <Typography sx={{ paddingLeft: '4px' }}> 1 : 기초 레벨</Typography>
            <Typography sx={{ paddingLeft: '4px' }}> 2 : 취미 레벨</Typography>
            <Typography sx={{ paddingLeft: '4px' }}> 3 : 실무 레벨</Typography>
          </HoverBox>
        )}
      </TitleBox>
      <SkillBox>
        <SkillName>
          <Typography sx={{ fontWeight: '700' }}>Front-end</Typography>
        </SkillName>
        <SkillGrid />
      </SkillBox>
      <SkillBox>
        <SkillName>
          <Typography sx={{ fontWeight: '700' }}>Back-end</Typography>
        </SkillName>
        <SkillGrid />
      </SkillBox>
      <SkillBox>
        <SkillName>
          <Typography sx={{ fontWeight: '700' }}>Database</Typography>
        </SkillName>
        <SkillGrid />
      </SkillBox>
    </SkillContainer>
  );
};
