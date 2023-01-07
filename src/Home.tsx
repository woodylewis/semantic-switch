import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
const heading = ['One', 'Two', 'Three'];
const body = ['This is One', 'This is Two', 'This is Three'];

const Home = () => {
  return (
    <Container sx={{ pt: 2 }} maxWidth='md'>
      <Grid container>
        <Grid item xs={12} textAlign='left'>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tincidunt lacus. Morbi
            at nibh nisi. Nunc eleifend volutpat lorem. Vestibulum vitae nisi ligula. Sed tempor eu
            arcu ac lobortis. Morbi sagittis a ipsum et gravida. Phasellus sit amet auctor nisl, a
            bibendum felis. Integer ut convallis lorem. Vivamus eu.
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1, py: 2 }}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {heading[card]}
                </Typography>
                <Typography>{body[card]}</Typography>
                <Button component={Link} to={StringList.PANEL_LINK} variant='outlined'>
                  Panel
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
