import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SpecialFriendsActivities() {
    const [Success, setSuccess] = useState(false);
    const [ActivitiesD, setActivitiesD] = useState([]);
    const [id, setID] = useState(0);
    
    useEffect(() => {
        setSuccess(false)
        const fetchOptions = {
            method: 'GET',
            credentials: 'include'
        }
        fetch("http://localhost:3001/api/GetActivities/", fetchOptions)
        .then(response => {
            console.log(response.status)
            if (response.status === 200){
                setSuccess(true)
            }
            return response.json()
        })
        .then(
            res => {
                setActivitiesD(res.disabled)
            }
        )
    }, [id])

    const navigate = useNavigate();
    function handleClick(id) {
        return navigate("/activities/"+id);
    }

    if (ActivitiesD.length === 0 || !Success) {
        return(
            <Typography sx = {{
                fontSize:16,
                whiteSpace:"pre-wrap",
                color:"#194E48"
            }}>
            There's nothing here yet, a friend may put up some activities soon!
            </Typography>
        )
    } else {
        return (
            <Grid container 
            spacing={2} 
            alignItems="center"
            sx={{
                "padding-top":"1%",
                "padding-left":"15%",
                "padding-right":"15%",
            }}>
                {ActivitiesD.map((act) => (
                    <Grid item xs={4}>
                        <Card 
                        sx={{ 
                            backgroundColor: "#C8D199",
                            padding: "1%"
                        }}
                        >
                            <CardActionArea
                              onClick={() => handleClick(act.id)}
                            >
                            <CardContent>
                                <Box>
                                <Typography 
                                sx = {{
                                    fontSize:20,
                                    fontWeight:"bold",
                                    whiteSpace:"pre-wrap",
                                    color:"#194E48"
                                }}>
                                    {act.name}
                                </Typography>
                                <Typography  
                                sx = {{
                                    fontSize:12,
                                    whiteSpace:"pre-wrap",
                                    color:"#194E48"
                                }}>
                                    {act.location}
                                </Typography>
                                </Box>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </ Grid>
                ))}
            </ Grid>
        );
    }
}


export default SpecialFriendsActivities