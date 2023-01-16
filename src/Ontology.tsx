import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { StringList } from './StringList';
import Footer from './Footer';

const Ontology = () => {
  return (
    <Container maxWidth='md'>
      <Grid container>
        <Grid item xs={4}>
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
        <Grid item xs={8}>
          <Typography>{StringList.ONTOLOGY_LABEL}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom>{StringList.SEMANTIC_ONTOLOGY_1}</Typography>
          <Typography>{StringList.SEMANTIC_ONTOLOGY_2}</Typography>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
};

export default Ontology;
