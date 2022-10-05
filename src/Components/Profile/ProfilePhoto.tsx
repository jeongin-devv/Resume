import React from 'react';
import { ProfilePhoto } from './styles';

const imageSrc = require('../../Image/profile.png');

export default () => (
  <ProfilePhoto>
    <img src={imageSrc} alt="profile" width="100%" />
  </ProfilePhoto>
);
