import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, styled, Typography } from '@mui/material';
import React from 'react';
import mehedi from '../../assets/images/mehedi.jpg';
import rownok from '../../assets/images/rownok.jpg';
import monir from '../../assets/images/monir.jpg';
import nayeem from '../../assets/images/nayeem.jpg';
import mehedi1 from '../../assets/images/mehedi1.jpg';

const StyledBox = styled(Box)(({theme}) => ({
   padding: '30px',
   [theme.breakpoints.down("sm")] : {
     padding: '0px',
 }
}))

const Rightbar = () => {
    return (
        <StyledBox flex={1} p={1} sx={{display: {xs: "none", sm: "block"}}}>
           <Box position="fixed" p={2}>
              <Typography variant='h6' fontWeight={100}>
                 Online Lecches
              </Typography>
              <AvatarGroup max={5}>
                <Avatar alt="Remy Sharp" src={mehedi} />
                <Avatar alt="Travis Howard" src={rownok} />
                <Avatar alt="Cindy Baker" src={monir} />
                <Avatar alt="Agnes Walker" src={nayeem} />
                <Avatar alt="Trevor Henderson" src={mehedi1} />
                <Avatar alt="Trevor Henderson" src={mehedi1} />
             </AvatarGroup>
             <Typography variant='h6' fontWeight={100} mt={5} mb={1}>
                 Latest Photos
              </Typography>
              <ImageList cols={3} rowHeight={100} gap={5}> 
                  <ImageListItem>
                     <img
                        src={`${nayeem}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${nayeem}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={nayeem}
                        loading="lazy"
                     />
                  </ImageListItem>
                  <ImageListItem>
                     <img
                        src={`${mehedi}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${mehedi}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={mehedi}
                        loading="lazy"
                     />
                  </ImageListItem>
                  <ImageListItem>
                     <img
                        src={`${mehedi1}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${mehedi1}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={mehedi1}
                        loading="lazy"
                     />
                  </ImageListItem>
                  <ImageListItem>
                     <img
                        src={`${rownok}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${rownok}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={rownok}
                        loading="lazy"
                     />
                  </ImageListItem>
                  <ImageListItem>
                     <img
                        src={`${monir}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${monir}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={monir}
                        loading="lazy"
                     />
                  </ImageListItem>
                  <ImageListItem>
                     <img
                        src={`${mehedi}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${mehedi}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={mehedi}
                        loading="lazy"
                     />
                  </ImageListItem>
              </ImageList>
              
              {/* ------ latest stories ------ */}
              <Typography variant='h6' fontWeight={100} mt={5}>
                 Latest Stories
              </Typography>
               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src={mehedi} />
            </ListItemAvatar>
            <ListItemText
               primary="Brunch this weekend?"
               secondary={
                  <React.Fragment>
                  <Typography
                     sx={{ display: 'inline' }}
                     component="span"
                     variant="body2"
                     color="text.primary"
                  >
                     Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
               }
            />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
               <Avatar alt="Travis Howard" src={monir} />
            </ListItemAvatar>
            <ListItemText
               primary="Summer BBQ"
               secondary={
                  <React.Fragment>
                  <Typography
                     sx={{ display: 'inline' }}
                     component="span"
                     variant="body2"
                     color="text.primary"
                  >
                     to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
               }
            />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
               <Avatar alt="Cindy Baker" src={nayeem} />
            </ListItemAvatar>
            <ListItemText
               primary="Oui Oui"
               secondary={
                  <React.Fragment>
                  <Typography
                     sx={{ display: 'inline' }}
                     component="span"
                     variant="body2"
                     color="text.primary"
                  >
                     Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
               }
            />
            </ListItem>
           </List>
           </Box>
         </StyledBox>
    );
};

export default Rightbar;