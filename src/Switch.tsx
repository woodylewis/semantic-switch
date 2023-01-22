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
          <SchemaOntology
            entityLabel='NETWORK'
            entityName='Group 1'
            nodeLabels={['Node 1', 'Node 2', 'Node 3']}
            nodeNames={['Company A', 'Company B', 'Company C']}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SchemaOntology
            entityLabel='NODE'
            entityName='COMPANY'
            nodeLabels={['Finance', 'Marketing', 'Operations']}
            nodeNames={['Data Feed 1', 'Data Feed 2', 'Data Feed 3']}
          />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Switch;
