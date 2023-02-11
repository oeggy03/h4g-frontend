import { Box, Typography, Grid, Fab } from '@mui/material';
import BestBuddiesActivities from './BestBuddiesActivities';
import SpecialFriendsActivities from './SpecialFriendsActivities';
import { useNavigate } from 'react-router-dom';
 
function ActivityList() {
    const navigate = useNavigate();
    const handleCreateActClick = () => {
        return navigate("/create-activity");
    }

    return (
        <Grid container 
        spacing={1}
        sx={{
            "padding-top":"1%",
            "padding-left":"10%",
            "padding-right":"10%",
            "padding-bottom":"2%"
        }}>
            <Grid item xs={6}>
                <Typography sx={{
                    "padding-top":"2%",
                    "padding-bottom":"1%",
                    "fontSize":20
                }}
                >From your Best Buddies!</Typography>
                <BestBuddiesActivities />
            </Grid>
            <Grid item xs={6}>
                <Typography sx = {{
                    "padding-top":"2%",
                    "padding-bottom":"1%",
                    "fontSize":20
                }}
                > From your Special Friends! </Typography>
                <SpecialFriendsActivities />
            </Grid>
            <Fab 
            variant="extended"
            size="medium"
            onClick={handleCreateActClick}
            sx={{
                margin:0,
                top:'auto',
                right:40,
                bottom:40,
                left:'auto',
                position:'fixed',
                backgroundColor:'#98BA7D',
            }}>
                Create Activity
            </Fab>
         </Grid>
    );
}

export default ActivityList