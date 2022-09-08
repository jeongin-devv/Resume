import React from 'react';
import {
  AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  CareerContainer, TitleBox, Title, CareerAccordion, CareerSpan,
} from './styles';

export default () => (
  <CareerContainer>
    <TitleBox>
      <Title>Career</Title>
    </TitleBox>
    <CareerAccordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon htmlColor="#FFFFFF" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}><CareerSpan>2022.05 ~ </CareerSpan>KineMaster</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ paddingLeft: '16px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '700' }}>
          Service Platform Team 1 / Developer
        </Typography>
      </AccordionDetails>
    </CareerAccordion>
  </CareerContainer>
);
