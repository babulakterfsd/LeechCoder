import { Box, styled } from "@mui/material";
import Posts from "./Posts";

const StyledBox = styled(Box)(({theme}) => ({
    padding: '8px',
    [theme.breakpoints.down("sm")] : {
      padding: '0px',
  }
}))

const Feed = () => {
    return (
        <StyledBox flex={4}>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
           <Posts/>
        </StyledBox>
    );
};

export default Feed;