import { useState } from "react"
import "./Auth.css"

const SignIn = ({toggle, updater}) => {
    const [signInMessage, updateMessage] = useState("")
    const [username, updateUsername] = useState("")
    const [password, updatePassword] = useState("")

    function fetchSignIn (username, password) {
        const data = {
            username:username,
            password:password
        }
        
        const fetchOptions = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (JSON.stringify(data)), // body data type must match "Content-Type" header
            credentials: 'include'
        }
        fetch('http://localhost:3001/api/SignIn', fetchOptions)
        .then(response => {
            if (response.status === 200) {updater(true)} 

            return response.json()})
        .then(res => {
            updateMessage(res.message); 
            console.log(res.user);
            window.localStorage.setItem("userid", res.user.id)
            window.localStorage.setItem("username", res.user.username)
            window.localStorage.setItem("email", res.user.email)
        });
        
    }
    return (
        <>
            <div className="signinModal">
                <div className="overlaySignIn"></div>
                <div className="contentSignIn">
                    <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 signUpFieldSet">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3 signUpFieldDiv">
                                <label className="db pa1 lh-copy f5">Username</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 signInField" type="username" name="username"  id="username"
                                        onChange={input => updateUsername(input.target.value)}/>
                            </div>
                            <div className="mv3 signUpFieldDiv">
                                <label className="db pa1 lh-copy f5">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent w-100 signInField" type="password" name="password"  id="password"
                                        onChange={input => updatePassword(input.target.value)}/>
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label> */}
                        </fieldset>
                        <div className="messageSI">{signInMessage}</div>
                        <div className="">
                            <div className="f6 link dim ba bw1 ph3 pv2 mb2 dib navy signupSubmit" onClick={() => fetchSignIn(username, password)}>Sign In</div>
                        </div>
                        <div className="lh-copy mt3">
                            {/* <a href="#0" className="f6 link dim black db">Sign up</a> */}
                            {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                        </div>
                    </form>
                    </main>

                    <button className="closeSignIn" onClick={() =>{toggle()}}>Close</button>
                </div>
            </div>
        </>
    )
}

export default SignIn