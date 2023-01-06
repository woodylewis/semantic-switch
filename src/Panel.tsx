import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { StringList } from './StringList';


const Panel = () => {

  return (
    <Fragment>
      <Container maxWidth="md">
      <Grid container>
            <Grid item xs={1}>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#757575',
                }}
                to='/'
              >
                <ArrowBackIosIcon />
              </Link>
            </Grid>
            <Grid item xs={11}>
              <Typography align='center' color='textSecondary' fontWeight={700}>
                {StringList.PANEL_LINK}
              </Typography>
            </Grid>
          </Grid>
      </Container>
    </Fragment>
  );

};

export default Panel;