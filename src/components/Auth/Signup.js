import { useState } from "react"
import "./Auth.css"

const SignUp = ({toggle}) => {
    const [signUpMessage, updateMessage] = useState("");
    const [name, updateName] = useState("")
    const [username, updateUsername] = useState("")
    const [email, updateEmail] = useState("")
    const [type, updateType] = useState(2)
    const [phone, updatePhone] = useState("")
    const [password, updatePassword] = useState("")

    //activates when sign up button is pressed
    function fetchSignUp () {
        
        const data = {
            name:name,
            username:username,
            email:email,
            phone:phone.toString(),
            type:type,
            password:password
        }
        console.log(data);
        
        const fetchOptions = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: (JSON.stringify(data)) // body data type must match "Content-Type" header
        }
        fetch('http://localhost:3001/api/SignUp', fetchOptions)
        .then(response => {
            return response.json()})
        .then(res => updateMessage(res.message));
    }


    return (
        <>
            <div className="signupModal">
                <div className="overlaySignUp"></div>
                <div className="contentSignUp">
                    <article className="pa4 black-8 signUpArticle">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 signUpFieldSet">
                            <legend className="f3 fw6 ph0 mh0">Create an account!</legend>
                            <div className="mt3 signUpFieldDiv">
                                <label className="db pa1 lh-copy f5">Your Name</label>
                                <input className="pa2 input-reset ba signUpField" type="name" name="name"  id="name"
                                        placeholder="What should we call you?" onChange={input => updateName(input.target.value)}/>
                            </div>
                            <div className="mt3 signUpFieldDiv">
                                <label className="db pa1 lh-copy f5">Phone Number</label>
                                <input className="pa2 input-reset ba signUpField" type="phone" name="phone"  id="phone"
                                        placeholder="A Singaporean phone number!" onChange={input => updatePhone(input.target.value)}/>
                            </div>
                            <div className="mt3 signUpFieldDiv">
                                <label className="db pa1 lh-copy f5">Email address</label>
                                <input className="pa2 input-reset ba signUpField" type="email" name="email-address"  id="email-address"
                                         placeholder="One email per account!" onChange={input => updateEmail(input.target.value)}/>
                            </div>
                            <div className="mt3 signUpTypeButtons">
                                <label className="db pa1 lh-copy f5">Pick your account type:</label>
                                <div className="signUpTypeButtonChoices">
                                    <button className={type === 0 ? "typeChosen" : "typeDisabled"} onClick={() => updateType(0)}>
                                        <div className="typeTitle">Special Friend:</div>
                                        <div className="typeBody">For those of us who may need a little help in our daily lives.</div>
                                    </button>
                                    <button className={type === 1 ? "typeChosen" : "typeAbled"} onClick={() => updateType(1)}>
                                        <div className="typeTitle">Best Buddy:</div>
                                        <div className="typeBody">For those of us who would like to help others enjoy everyday activities.</div>
                                    </button>
                                </div>
                                
                            </div>
                            <div className="mt3 signUpFieldDiv">
                                <label className="db pa1 lh-copy f5">Username</label>
                                <input className="pa2 input-reset ba signUpField" type="username" name="username"  id="username"
                                        placeholder="A unique username!" onChange={input => updateUsername(input.target.value)}/>
                            </div>
                            <div className="mt3 signUpFieldDiv">
                                <label className="db pa1 lh-copy f5">Password</label>
                                <input className="pa2 input-reset ba signUpField" type="password" name="password"  id="password"
                                        placeholder="A strong password!" onChange={input => updatePassword(input.target.value)}/>
                            </div>
                            
                        </fieldset>
                        <div className="messageSU">{signUpMessage}</div>
                        <div className="mt3">
                            <div className="f6 link dim ba bw1 ph3 pv2 mb2 dib signupSubmit" onClick={fetchSignUp}>Sign Up</div>
                        </div>
                    </article>
                    <button className="f6 dim closeSignUp" onClick={() =>{toggle()}}>Close</button>
                </div>
            </div>
        </>
    )
}

export default SignUp