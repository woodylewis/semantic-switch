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
const heading = [
  StringList.PRICING_PRODUCT_LABEL_1,
  StringList.PRICING_PRODUCT_LABEL_2,
  StringList.PRICING_PRODUCT_LABEL_3,
];

const body = [
  StringList.PRICING_PRODUCT_COPY_1,
  StringList.PRICING_PRODUCT_COPY_2,
  StringList.PRICING_PRODUCT_COPY_3,
];

const price = [
  StringList.PRICING_PRODUCT_PRICE_1,
  StringList.PRICING_PRODUCT_PRICE_2,
  StringList.PRICING_PRODUCT_PRICE_3,
];

const Pricing = () => {
  return (
    <Container maxWidth='md'>
      <Grid
        container
        spacing={4}
        sx={{
          mt: 1,
          mb: 8,
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
          <Typography>{StringList.PRICING_LABEL}</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography align='center'>{StringList.PRICING_COPY_1}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center'>{StringList.PRICING_COPY_2}</Typography>
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
              <CardContent sx={{ flexGrow: 1, py: 2 }}>
                <Typography align='center' variant='subtitle1' sx={{ mb: 1 }}>
                  {heading[node]}
                </Typography>
                <Typography gutterBottom align='justify' variant='body2'>
                  {body[node]}
                </Typography>
                <Typography align='center' variant='subtitle1'>
                  {price[node]}
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
