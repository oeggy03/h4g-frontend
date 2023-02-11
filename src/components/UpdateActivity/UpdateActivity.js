import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import "./UpdateActivity.css"

const UpdateActivity = () => {
    const {id} = useParams()
    //for the message returned by the fetchUpdate function
    const [messageUpdate, setMessageUpdate] = useState("")
    const [updated, setUpdated] = useState(false) //checks if user has attempted to update the post by clicking the update button

    //for the initial GET request in UseEffect
    const [success, setSuccess] = useState(false)


    const [activity, setActivity] = useState({})
    const [ownership, setOwnership] = useState(false)

    //for input fields
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [location, setLocation] = useState("")

    useEffect(() => {
        //retrieve the post details
        const fetchOptions = {
            method: 'GET',
            credentials: 'include'
        }

        fetch("http://localhost:3001/api/GetActivity/"+String(id), fetchOptions)
        .then(response => {
            console.log(response.status)
            if (response.status === 200){
                setSuccess(true)
            }
            console.log(response.status)
            return response.json()
        })
        .then(
            res => {
                console.log(success)
                if (success)
                {setActivity(res.activity)
                setOwnership(res.owner)

                //Setting the values that will be sent to the server during the update
                setName(res.activity.name)
                setDesc(res.activity.desc)
                setLocation(res.activity.location)}
            }

        )
    }, [id, ownership, success])

    //happens when the update button is clicked.
    function fetchUpdate () {
        const data = 
        {
            name:name,
            desc:desc,
            location:location,
            activity_id:id
        }

        const fetchOptions = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            credentials: 'include',
            body: (JSON.stringify(data)) // body data type must match "Content-Type" header
        }

        fetch('http://localhost:3001/api/UpdateActivity', fetchOptions)
        .then(response => {
            return response.json()})
        .then(res => {
            setUpdated(true)
            setMessageUpdate(res.message)
        });
    }

    //Note: update post copies over from CreatePost
    return(
    <div>
    {(updated ? 
    <>
        <div className="plainText">{messageUpdate}</div> 
        <Link class="f6 link dim ph3 pv2 dib white postViewDeleteConfirmBut" to={"/activities"}>Back to activities</Link>
    </> : //Checks if update attempt has been made
    success ? ( //Update attempt has not been made. Checks if post can be retrieved successfully
    ownership ? //Post retrieved successfully. Check if logged in user is indeed its creator
    <div className="createWrapper"> 
        <text className="createIntro">Update your Activity!</text>
        <text className="updateActivityNote">You are currently editing your activity: <text className="toBold">{activity.name}</text></text>
        <div className="editFieldSection">
            <div className="editFieldActivity">Edit your activity's name (Maximum 100 characters!):</div>
            <textarea maxLength={100} type='text' defaultValue={activity.name} className="titleBar" id="title"
                        onChange={input => setName(input.target.value)}/>
        </div>
        <div className="editFieldSection">
            <div className="editFieldActivity">Where will your activity be held?</div>
            <textarea type='text' defaultValue={activity.location} className="titleBar" id="body" onChange={input => setLocation(input.target.value)}/>
        </div>
        <div className="editFieldSection">
            <div className="editFieldActivity">Give your activity a description:</div>
            <textarea type='text' defaultValue={activity.desc} className="createBody" id="desc"
                        onChange={input => setDesc(input.target.value)}/>
        </div>
        <div>   
            <button className="link dim ph3 pv2 mb2 dib white updateActivityButton"
                onClick={fetchUpdate}>Update Activity</button>
        </div>
    </div> : <div className="plainText">Sorry, you are not the creator of this activity.</div>) : <div className="plainText">Sorry, activity not found.</div>)}
    </div>)
}

export default UpdateActivity