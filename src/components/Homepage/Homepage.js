import { Box, Grid, Divider, Typography } from '@mui/material';
import { AccessibleForwardIcon } from '@mui/icons-material';

function Homepage() {
    return(
      <Box sx={{ 
        "padding-top": "2%",
        "padding-left": "20%",
        "padding-right": "20%"
      }}>
        <Grid container spacing={3} mt={4}>
            <Grid item xs={6}>
            <div align="left">
                <Typography
                variant="h2"
                fontWeight={"bold"}
                color="#194E48"
                >
                    Do what you like, when you like.
                </Typography>
                <Typography
                variant="body2"
                color="#194E48"
                mt={1}
                >
                    Join our community of Special Friends and Best Buddies! Share a moment in time 
                    with your Best Buddy or Special Friend, form meaningful connections, and enjoy
                    the company of another while doing what you like.
                </Typography>
            </div>
            </Grid>
            <Grid item xs={6}>
            <Box mt={7}/>
            <img 
              src="https://i.ytimg.com/vi/9CsGSOnZVvg/maxresdefault.jpg" 
              alt="Visually impaired girl doing photography with people clapping around her"
            />
            </Grid>
        </Grid>
        <Box mt={15}/>
        <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
            <div align="left">
                <Typography
                variant="h6"
                color="#194E48"
                fontWeight={"Bold"}
                >
                    For Best Buddies:
                </Typography>
                <Divider color="#194E48"/>
                <Typography
                variant="body2"
                color="#194E48"
                >
                    Learn more about your Special Friends, and share your joys with another. Life
                    is better when you share what you love.
                </Typography>
            </div>
            </Grid>
        </Grid>   
        <Box mt={4}/>
        <Grid container>
            <Grid item xs={3}>
                <svg data-testid="AccessibleForwardIcon"/>
            </Grid>
            <Grid item xs={8}>
            <div align="left">
                <Typography
                variant="h6"
                color="#194E48"
                fontWeight={"Bold"}
                >
                    For Special Friends:
                </Typography>
                <Divider color="#194E48"/>
                <Typography
                variant="body2"
                color="#194E48"
                >
                    Try out new things with your Best Buddies, and forge new experiences with each
                    other. Experience life in a new light.
                </Typography>   
            </div>
            </Grid>
        </Grid>
        <Box mt={12}/>
      </Box>
    )
}

export default Homepage