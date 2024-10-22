import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StringList } from './StringList';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6, borderTop: 1 }} component='footer'>
      <Typography variant='body2' color='text.secondary' align='center'>
        {'Copyright ©'}
        {new Date().getFullYear()}
        &nbsp; {StringList.FOOTER_COPYRIGHT}
        <br />
        {StringList.FOOTER_TRADEMARK}
      </Typography>
    </Box>
  );
};

export default Footer;
