import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { StringList } from './StringList';

const Panel = () => {
  return (
    <Container maxWidth='md'>
      <Grid container>
        <Grid item xs={1}>
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
        <Grid item xs={11}>
          <Typography align='left' color='textSecondary' fontWeight={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tincidunt lacus. Morbi
            at nibh nisi. Nunc eleifend volutpat lorem. Vestibulum vitae nisi ligula. Sed tempor eu
            arcu ac lobortis. Morbi sagittis a ipsum et gravida. Phasellus sit amet auctor nisl, a
            bibendum felis. Integer ut convallis lorem. Vivamus eu.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Panel;
