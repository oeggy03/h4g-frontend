import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import BestBuddiesActivities from './BestBuddiesActivities';
import SpecialFriendsActivities from './SpecialFriendsActivities';
 
function ActivityList() {

    return (
        <Box
          sx={{
            flexDirection:"column",
            overflow:"hidden",
            overflowY:"scroll",
            width:"100%"
          }}
        >
            <Typography sx={{
                "padding-top":"2%",
                "padding-bottom":"1%",
                "fontSize":20
            }}
            >From your Best Buddies!</Typography>
            <BestBuddiesActivities />
            <Box sx={{
                width:"100%",
                height:"50px"
            }}/>
            <Typography sx = {{
                "padding-top":"2%",
                "padding-bottom":"1%",
                "fontSize":20
            }}
            > From your Special Friends! </Typography>
            <SpecialFriendsActivities />
         </ Box>
    );
}

export default ActivityList