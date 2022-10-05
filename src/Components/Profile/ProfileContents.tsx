import React from 'react';
import { GitHub as GitHubIcon, Article as ArticleIcon, Mail as MailIcon } from '@mui/icons-material';
import { profileName, profileLabel } from './Profiles';
import {
  ProfileContents, ProfileName, ProfileLabel, ProfileAddress, ProfileLink,
} from './styles';

export default () => (
  <ProfileContents>
    <ProfileName>
      {profileName}
      <ProfileLabel>{`(${profileLabel})`}</ProfileLabel>
    </ProfileName>
    <ProfileAddress>
      <MailIcon />
      <ProfileLink href="mailto: jeongin.devv@gmail.com" target="_blank" sx={{ paddingLeft: '8px' }}>jeongin.devv</ProfileLink>
    </ProfileAddress>
    <ProfileAddress>
      <GitHubIcon />
      <ProfileLink href="https://github.com/jeongin-devv" target="_blank" sx={{ paddingLeft: '8px' }}>GitHub</ProfileLink>
    </ProfileAddress>
    <ProfileAddress>
      <ArticleIcon />
      <ProfileLink href="https://devjeongin.notion.site/devjeongin/Resume-8fd46c435272438d906e8b2957c4b551" target="_blank" sx={{ paddingLeft: '8px' }}>Notion</ProfileLink>
    </ProfileAddress>
  </ProfileContents>
);
