import React from 'react';
import { Typography } from '@mui/material';
import {
  SkillBox, SkillName, SkillList, SkillLevel, Skill, SkillDot,
} from './styles';
import { backend, frontend, tools } from './Skills';

const skillArray = [
  frontend,
  backend,
];

export default () => (
  <>
    {skillArray.map((skill) => (
      <SkillBox key={skill.title}>
        <SkillName>
          <Typography sx={{ fontWeight: '700' }}>{skill.title}</Typography>
        </SkillName>
        <SkillList>
          {skill.skills.map((obj) => (
            <Skill key={obj.name}>
              <SkillLevel level={obj.level}>{obj.level}</SkillLevel>
              {obj.name}
            </Skill>
          ))}
        </SkillList>
      </SkillBox>
    ))}
    <SkillBox>
      <SkillName>
        <Typography sx={{ fontWeight: '700' }}>{tools.title}</Typography>
      </SkillName>
      <SkillList>
        {tools.skills.map((obj) => (
          <Skill key={obj.name}>
            <SkillDot />
            {obj.name}
          </Skill>
        ))}
      </SkillList>
    </SkillBox>
  </>
);
