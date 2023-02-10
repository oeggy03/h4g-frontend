import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'tachyons';
import Signup from './components/Auth/Signup';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import ActivityList from './components/ActivityList/ActivityList';
import { button } from '@mui/material';
import Activity from './components/Activity/Activity';
import UpdateActivity from './components/UpdateActivity/UpdateActivity';

function App() {
  const [isSignedIn, setSignedIn] = useState(false); //tracks whether user is signed in

  //user details, which we can send to the Profile component instead of getUser again.
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [userid, setID] = useState("")
  const [type, setType] = useState("")


  //We retrieve the user's data first. 
  //Data can only be retrieved if the user has signed in before due to the jwt token
  //jwt prevents them from signing out if they close the page
  useEffect(() => {
    const fetchOptions = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        credentials: 'include' //Required for JWT tokens to work
    }

    fetch('http://localhost:3001/api/GetUser', fetchOptions)
    .then(response => {
        if (response.status === 200) {setSignedIn(true)} 

        return response.json()})
    .then(res => {
        setUsername(res.username)
        setID(res.id)
        setEmail(res.email)
        setName(res.name)
        setPhone(res.phone)
        setType(res.type)
    });
  })

  //A function that can be passed as a prop, to update whether the user is signed in
  //status is boolean
  function UpdateSignedIn (status) {
    setSignedIn(status)
  }

  return (
  <div className="App">
    <Navbar updateSI = {UpdateSignedIn} statusSI = {isSignedIn}/>
    <div className='appContainer'>
      <Routes>
        <Route path = "/" element = {<Homepage updateSI = {UpdateSignedIn} statusSI = {isSignedIn}/>} />
        <Route path = "/signup" element = {<Signup updateSI = {UpdateSignedIn}/>} />
        <Route path = "/activities" element = {<ActivityList /> }/>
        <Route path = "/activities/:id" element = {<Activity/>} />
        <Route path = "/activities/:id/update" element = {<UpdateActivity/>} />
        {/* <Route path = "/profile/:id" element = {<ProfilePublic/>} /> */}
      </Routes>
    </div>
  </div>);
}

export default App;
