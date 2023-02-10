import { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../Auth/Signin";
import SignUp from "../Auth/Signup";
import "./Navbar.css"

function Navbar({updateSI, statusSI}) {
    const [showSignIn, setShowSI] = useState(false) //whether we should show the signin popup
    const [showSignUp, setShowSU] = useState(false) //whether we should show the signup popup 

    function SignOut() {
        const fetchOptions = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            credentials: 'include'
        }

        fetch('http://localhost:3001/api/SignOut', fetchOptions)
        .then(response => {
            if(response.status === 200) {updateSI(false)}
            return response.json()})
        .then(res => console.log(res.message));
    }

    function activateSignIn () {
        setShowSI(true)
    }

    function deactivateSignIn () {
        setShowSI(false)
    }

    function activateSignUp () {
        setShowSU(true)
    }

    function deactivateSignUp () {
        setShowSU(false)
    }

    return (
        <nav className = "navbar">
        <ul className='navLeft'>
            <a href='https://github.com/oeggy03/h4g-frontend' target="_blank" rel="noreferrer noopener">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='github' alt="H4G"/>
            </a>
            <Link to="/" className='title'>Buddy4Good</Link>
            <CustomLink to = '/activities'>Activities</CustomLink>
            <CustomLink to = '/findafriend'>Find a Friend</CustomLink>
        
        </ul>
        
        <ul className='navRight'>
            {statusSI ? null : <div className='navPath' onClick={activateSignIn}>Sign In</div>}
            {statusSI ? null : <div className='navPath' onClick={activateSignUp}>Sign Up</div>}
            {statusSI? <CustomLink to = '/profile'>Profile</CustomLink> : null}
            {statusSI? <div className='navPath' onClick={()=>SignOut()}>Sign Out</div> : null}
        </ul>
        {showSignIn?<SignIn toggle={deactivateSignIn} updater={updateSI}/>:null}
        {showSignUp?<SignUp toggle={deactivateSignUp}/>:null}
    </nav>)
}

function CustomLink ({ to, children, ...props}) {
    return (
        <li className='navPath'>
            <Link to = {to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;