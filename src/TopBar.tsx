// import * as React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { StringList } from './StringList';

const TopBar = () => {
  return (
    <div>
      <Toolbar>
        <Hidden only={['xs']}>
          <Link
            style={{
              textDecoration: 'none',
              color: '#556cd6',
              fontWeight: 700,
              fontSize: 36,
              fontFamily: 'program, sans-serif',
            }}
            to='/'
          >
            {StringList.MAIN_TITLE}
          </Link>
        </Hidden>
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <Grid container>
            <Grid item xs={12} textAlign='center'>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#556cd6',
                  fontWeight: 700,
                  fontSize: 34,
                  fontFamily: 'program, sans-serif',
                }}
                to='/'
              >
                {StringList.MAIN_TITLE}
              </Link>
            </Grid>
          </Grid>
        </Hidden>
      </Toolbar>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 1,
          }}
        >
          <Container maxWidth="sm">
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
              Network software for semantic ontology
        </Typography>
          </Container>
        </Box>
    </div>
  );
};

export default TopBar;
