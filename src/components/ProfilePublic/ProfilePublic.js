import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./profile.css"

function ProfilePublic() {
    const {id} = useParams()

    const [activities, setActivities] = useState([])
    const [success, setSuccess] = useState(false)
    const [message, setMessage] = useState("Sorry, user not found.")

    const [username, setUsername] =useState("")
    const [type, setType] =useState(2)
    const [name, setName] =useState("")
    
    useEffect(() => {
        const fetchOptions = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            credentials: 'include'
        }

        fetch('http://localhost:3001/api/GetProfile/' + {id}, fetchOptions)
        .then(response=>{ 
            if (response.status === 200) {
                setSuccess(true)

            }
            return response.json()})
        .then(res => {
            setUsername(res.profile.username);
            setType(res.profile.type);
            setName(res.profile.name)
        });

    })

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
        <div className="profileHeader">
            <text className="profileHello">Hello, my name is {name}!</text>
            <text className="profileGreeting">I am a {displayType()}</text>
            <text className="profileUsername">My username is {username}</text>
            <text className="profileYourPosts">Activities created by me:</text>
            {/* <PostCards posts={userPosts} statusSI = {statusSI}/> */}
        </div> 
        : <div className="plainText">{message}</div>}
        </div>
    )
}

export default ProfilePublic;