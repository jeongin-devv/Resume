import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import ProfileContents from './ProfileContents';
import { ProfileContainer } from './styles';

export default () => (
  <ProfileContainer>
    <ProfilePhoto />
    <ProfileContents />
  </ProfileContainer>
);
