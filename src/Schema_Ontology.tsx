import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Box from '@mui/material/Box';

const Schema_Ontology = () => {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>Top level</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center' }}>content</Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Box sx={{ border: 1, textAlign: 'center' }}>content</Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center' }}>content</Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Box sx={{ border: 1, textAlign: 'center' }}>content</Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center' }}>content</Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Box sx={{ border: 1, textAlign: 'center' }}>content</Box>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ border: 1, textAlign: 'center' }}>content</Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Schema_Ontology;
