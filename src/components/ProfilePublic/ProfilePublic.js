import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProfilePublic.css"

function Profile({userid, phone, email}) {
    const {id} = useParams()

    const [createdActivities, setCreatedActivities] = useState([])
    const [joinedActivities, setJoinedActivities] = useState([])

    const [activities, setActivities] = useState([])
    const [success, setSuccess] = useState(false)

    const [username, setUsername] =useState("")
    const [type, setType] =useState(2)
    const [name, setName] =useState("")

    //for activities navbar
    const [choice, setChoice] = useState(0)
    
    useEffect(() => {
        const fetchOptions = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            credentials: 'include'
        }

        fetch('http://localhost:3001/api/GetProfile/' + id, fetchOptions)
        .then(response=>{ 
            if (response.status === 200) {
                setSuccess(true)

            } else {
                setSuccess(false)
            }
            return response.json()})
        .then(res => {
            setUsername(res.profile.username);
            setType(res.profile.type);
            setName(res.profile.name);
            setActivities(res.activities_created);

            setCreatedActivities(res.activities_created);
            setJoinedActivities(res.activities_joined)
        });

    },[id, userid])

    function displayType() {
        if  (type === 0) {
            return " Special Friend!"
        } else {
            return " Best Buddy!"
        }
    }

    return (
        <div className="profileSection">
            {success? 
            <div className="profileSuccess">
                <div className="profileHeader">
                    <div className="profileHeaderContent">
                        <div className="profileHello">Hello, my name is {name}!</div>
                        <div className="profileGreeting">I am a {displayType()}</div>
                        
                    </div>
                    <div className="profileHeaderDetails">
                        <div className="profileUsernameDetails">
                            <div className="profileUsernameTitle">username:</div>
                            <div className="profileUsername">{username}</div>
                        </div>
                        {(userid == id) ? 
                        <div className="personalInformation">
                            <div className="profileUsernameTitle">email:</div>
                            <div className="profileUsername">{email}</div>
                            <div className="profileUsernameTitle">phone number:</div>
                            <div className="profileUsername">{phone}</div>
                        </div> : null}
                        
                    </div>
                </div> 
                <div className="profilePostSection">
                    <nav className="profileYourPosts">
                        <div className="profileYourPostsTitle"> My activities:</div>
                        <div className="profileYourPostsButtons">
                            <button className={choice === 0 ? "activityTypeChosen" : "activityTypeToChoose"} 
                                onClick={() => {setChoice(0); setActivities(createdActivities)}}>
                                Created
                            </button>
                            <button className={choice === 1 ? "activityTypeChosen" : "activityTypeToChoose"} 
                                onClick={() => {setChoice(1); setActivities(joinedActivities)}}>
                                Joined
                            </button>
                        </div>
                    </nav>
                    {activities.length === 0?
                    <div className="plainText">No activities yet!</div>
                    : activities.map((activity) => {
                        return(
                        <div className="profileActivityCard">
                            <div className="profileActivityCardContents">
                                <div className="profileActivityTitle">activity:</div>
                                <div className="profileActivityName">{activity.name}</div>
                                <Link className="f6 link dim ba bw1 ph3 pv2 mb2 dib profileActivityCheckoutButton" to={"/activities/"+activity.id}>Check out</Link>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
            : <div className="plainText">Sorry, user not found.</div>}
        </div>
    )
}

export default Profile;