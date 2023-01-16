import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HomeIcon from '@mui/icons-material/Home';

import { StringList } from './StringList';
import Footer from './Footer';

const nodes = [0, 1, 2];
const heading = [StringList.PRICING_PRODUCT_LABEL_1, StringList.PRICING_PRODUCT_LABEL_2, StringList.PRICING_PRODUCT_LABEL_3];

const Pricing = () => {
  return (
    <Container maxWidth='md'>
      <Grid container
        spacing={4}
        sx={{
          mt: 1,
        }}>
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
          <Typography>{StringList.PRICING_LABEL}</Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography gutterBottom align='center'>
            {StringList.PRICING_COPY_1}
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
                <Typography>
                  {heading[node]}
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Container>
  );
};

export default Pricing;
