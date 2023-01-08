import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { StringList } from './StringList';

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright ©'}
      {new Date().getFullYear()}
      &nbsp; WL Solutions LLC
    </Typography>
  );
};

const cards = [0, 1, 2];
const heading = [StringList.ONTOLOGY_LABEL, StringList.SWITCH_LABEL, StringList.PRICING_LABEL];
const link = [StringList.ONTOLOGY_LINK, StringList.SWITCH_LINK, StringList.PRICING_LINK];

const Home = () => {
  return (
    <Container sx={{ pt: 2 }} maxWidth='md'>
      <Card sx={{ marginBottom: 2, textAlign: 'center' }}>
        <CardMedia component='img' image={StringList.NETWORK_IMAGE} height='320' />
      </Card>

      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              raised={true}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center' }}
            >
              <CardContent sx={{ flexGrow: 1, py: 4 }}>
                <Button component={Link} to={link[card]} variant='contained'>
                  {heading[card]}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
