import React from 'react';
import { Favorite, MoreVert, Share } from '@mui/icons-material';
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import {styled} from '@mui/material';

const StyledCard = styled(Card)(({theme}) => ({
    margin: '35px 120px',
    [theme.breakpoints.down("sm")] : {
      width: 'calc(100% - 20px)',
      margin: '35px 0px 0px 0px',
      padding: '0px 5px',
  }
}))

const Posts = () => {
    return (
        <StyledCard>
            <CardHeader
                avatar={
                <Avatar src='https://picsum.photos/200/300'  aria-label="recipe">
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Learn Javacript with LeechCoder"
                subheader="May 27, 2022"
            />
            <CardMedia
                component="img"
                height="400"
                image="https://source.unsplash.com/random"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: 'red'}} />}/>
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>
            </CardActions>
           </StyledCard>
    );
};

export default Posts;