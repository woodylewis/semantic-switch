import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

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
const nodes = [0, 1, 2];
const heading = [StringList.ONTOLOGY_LABEL, StringList.SWITCH_LABEL, StringList.PRICING_LABEL];
const link = [StringList.ONTOLOGY_LINK, StringList.SWITCH_LINK, StringList.PRICING_LINK];
const icon = [
  <AccountTreeIcon sx={{ fontSize: 40 }} />,
  <DisplaySettingsIcon sx={{ fontSize: 40 }} />,
  <AccountBalanceIcon sx={{ fontSize: 40 }} />,
];

const Home = () => {
  return (
    <Container sx={{}} maxWidth='md'>
      <Grid
        container
        spacing={4}
        sx={{
          mt: 1,
        }}
      >
        <Grid item xs={12}>
          <Typography gutterBottom align='center'>
            {StringList.HOME_COPY1}
          </Typography>
          <Typography gutterBottom align='center'>
            {StringList.HOME_COPY2}
          </Typography>
        </Grid>

        {nodes.map((node) => (
          <Grid item key={node} xs={12} sm={4}>
            <Card
              raised={true}
              sx={{
                height: 160,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                pb: 2,
              }}
            >
              <CardContent sx={{ flexGrow: 1, py: 4 }}>
                {icon[node]}
                <br />
                <Button
                  component={Link}
                  to={link[node]}
                  variant='contained'
                  sx={{
                    mt: 2,
                  }}
                >
                  {heading[node]}
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
