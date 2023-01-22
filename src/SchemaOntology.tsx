import PropTypes from 'prop-types';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Box from '@mui/material/Box';

export type SchemaProps = {
  entityLabel: string;
  entityName: string;
};

const SchemaOntology = ({ entityName, entityLabel }: SchemaProps) => {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>{entityLabel}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center', p: 1 }}>{entityName}</Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Box sx={{ border: 1, textAlign: 'center', p: 1 }}>content</Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center', p: 1 }}>content</Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Box sx={{ border: 1, textAlign: 'center', p: 1 }}>content</Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center', p: 1 }}>content</Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Box sx={{ border: 1, textAlign: 'center', p: 1 }}>content</Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center', p: 1 }}>content</Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default SchemaOntology;

SchemaOntology.propTypes = {
  entityLabel: PropTypes.string.isRequired,
  entityName: PropTypes.string.isRequired,
};
