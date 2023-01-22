import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import Box from '@mui/material/Box';

import { StringList } from './StringList';
import Footer from './Footer';

import SchemaOntology from './SchemaOntology';

const Switch = () => {
  return (
    <Container maxWidth='md'>
      <Grid
        container
        spacing={4}
        sx={{
          mt: 1,
        }}
      >
        <Grid item xs={5}>
          <Link
            style={{
              textDecoration: 'none',
              color: '#757575',
            }}
            to={StringList.HOME_LINK}
          >
            <HomeIcon color='primary' fontSize='large' />
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Typography>{StringList.SWITCH_LABEL}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom align='center'>
            {StringList.SWITCH_1}
          </Typography>
          <Typography align='center'>{StringList.SWITCH_2}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SchemaOntology entityLabel='NETWORK' entityName='Group 1' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SchemaOntology entityLabel='NODE' entityName='DATA FEED' />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Switch;
