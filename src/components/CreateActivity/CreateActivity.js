import { useRef, useState } from "react";
import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import { Container } from "@mui/system";

const CreateActivity = () => {
    const [createActivityMessage, updateMessage] = useState("");
    const [Name, setName] = useState("");
    const nameRef = useRef<HTMLTextAreaElement>(null);
    const [Desc, setDesc] = useState("");
    const descRef = useRef<HTMLTextAreaElement>(null);
    const [Location, setLocation] = useState("");
    const locationRef = useRef<HTMLTextAreaElement>(null);

    const fetchActivity = () => {
        const data = {
            name:Name,
            desc:Desc,
            location:Location
        }

        const fetchOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
              },
            body: (JSON.stringify(data)),
            credentials: 'include'
        }
        fetch('http://localhost:3001/api/CreateActivity', fetchOptions)
        .then(response => {
            return response.json()})
        .then(res => updateMessage(res.message));

        setName("");
        setDesc("");
        setLocation("");
    }

    return (
        <Box width="60%">
            <div width="100%">
            <Box mt={3} padding="5%">
                <Container>
                    <Typography 
                    align="left"
                    sx = {{
                    fontSize:30,
                    fontWeight:"bold",
                    whiteSpace:"pre-wrap",
                    color:"#194E48"
                    }}>
                        Create Activity
                    </Typography>
                    {/* <Typography 
                    align="left" 
                    variant="body1" 
                    fontWeight={"Bold"} 
                    mt={4}
                    >
                        Title
                    </Typography> */}
                    <TextField
                    required 
                    fullWidth
                    multiline
                    id="title" 
                    label="Title"
                    margin="dense"
                    inputRef={nameRef}
                    onChange={(event) => setName(event.target.value)}
                    value={Name}/>
                    <TextField 
                    required
                    fullWidth
                    multiline
                    id="desc" 
                    label="Description"
                    margin="dense"
                    inputRef={descRef}
                    onChange={(event) => setDesc(event.target.value)}
                    value={Desc}/>
                    <TextField 
                    required
                    fullWidth
                    multiline
                    id="location" 
                    label="Location"
                    margin="dense"
                    inputRef={locationRef}
                    onChange={(event) => setLocation(event.target.value)}
                    value={Location}/>
                </Container>
                <Grid container width="100%" alignContent={"right"} spacing={1} p={1}>
                    <Grid item xs={9}>
                        <Typography>{createActivityMessage}</Typography>
                    </Grid>
                    <Grid item>
                    <Button variant="contained" onClick={fetchActivity} sx={{ backgroundColor:'#98BA7D' }}>
                        Post Activity
                    </Button>
                    </Grid>
                </Grid>
            </Box>
            </div>
        </Box>
    );
}

export default CreateActivity