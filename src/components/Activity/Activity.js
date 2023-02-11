import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ActivityContent from "./ActivityContent"
import "./Activity.css"

function Activity(statusSI) {
    const {id} = useParams()

    const [success, setSuccess] = useState(false) //activity retrieved success?
    const [deleted, setDeleted] = useState(false) //activity deleted?

    const [userid, setUserID] = useState({})
    const [activity, setActivity] = useState({})
    const [participants, setParticipants] = useState([])
    const [comments, setComments] = useState([])
    const [joined, setJoined] = useState(false)
    const [creator, setCreator] = useState("")
    const [ownership, setOwnership] = useState(false)
    

    useEffect(() => {
        setSuccess(false)
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
            return response.json()
        })
        .then(
            res => {
                setActivity(res.activity)
                setCreator(res.creator)
                setOwnership(res.owner)
                setJoined(res.joined)
                setParticipants(res.participants)
                setComments(res.comments)
                setUserID(res.user_id)
            }

        )
    }, [id])

    function fetchDelete () {
        const fetchOptions = {
            method: 'DELETE',
            credentials: 'include'
        }
        fetch("http://localhost:3001/api/DeleteActivity/"+String(id), fetchOptions)
        .then(response => {
            console.log(response.status)
            if (response.status === 200){
                setDeleted(true)
            }
        })
    }

    return (
        <div className="viewActivityWindow">
            {!success ? <div className="plainText">{"Sorry, activity cannot be found - either you are signed out, or it has been deleted." }</div> :
            (!deleted ? <div className="viewActivityWindowSuccess">
                <ActivityContent userid={userid} id={id} ownership={ownership} joined={joined} creator={creator} activity={activity} participants={participants} fetchDelete={fetchDelete} comments={comments}/>
                {/* <ViewPostComments postid={id}/> */}
                
            </div> : 
            <div className="postViewDeleteConfirm">
                <div className="plainText">Post deleted successfully.</div>
                <Link class="f6 link dim ph3 pv2 mb2 dib white bg-navy postViewDeleteConfirmBut" to={"/activities"}>Back to activities</Link>
            </div>)}
        </div>)
}

export default Activity