import React from 'react';
import {
  AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  CareerAccordion, CareerSpan, CareerDot, CareerLine,
} from './styles';
import { CareerType } from './Careers';

interface AccordionProps{
  career : CareerType
}

export default ({ career } : AccordionProps) => (
  <CareerAccordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon htmlColor="#FFFFFF" />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography sx={{ fontSize: '16px', fontWeight: '700' }}>
        <CareerSpan>{ career.date }</CareerSpan>
        { career.name }
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ padding: '0 8px 16px 16px' }}>
      <Typography sx={{
        paddingLeft: '8px',
        paddingBottom: '4px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '700',
      }}
      >
        { career.department }
      </Typography>
      {career.tasks.map((task) => (
        <CareerLine sx={{ padding: '4px 0 0 16px' }}>
          <CareerDot />
          <Typography sx={{ paddingLeft: '', color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px' }}>
            { task }
          </Typography>
        </CareerLine>
      ))}
    </AccordionDetails>
  </CareerAccordion>
);
