import { Link } from "react-router-dom"
import Comments from "./Comments"

const ActivityContent = ({userid, id, ownership, joined, creator, activity, participants, fetchDelete, comments}) => {
    function fetchJoin() {
        const data = {
            activity_id:id
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
        fetch('http://localhost:3001/api/JoinActivity', fetchOptions)
        .then(response => {
            if (response.status === 200) {alert("Success!")} 

            return response.json()})
        .then(res => {window.location.reload(false);})

    }

    function fetchLeave() {
        const data = {
            activity_id:id
        }
        
        const fetchOptions = {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (JSON.stringify(data)), // body data type must match "Content-Type" header
            credentials: 'include'
        }
        fetch('http://localhost:3001/api/LeaveActivity/'+id, fetchOptions)
        .then(response => {
            if (response.status === 200) {alert("Successfully left activity.")} 

            return response.json()})
        .then(res => {window.location.reload(false);})

    }
    return (
    <div className="activityContentWrapper">
        <div className="activityViewIntroSec">
            <div className="activityViewTitleLabel">activity title</div>
            <div className="activityViewTitle">{activity.name}</div>
            <div className="activityViewCreator"> <text className="activityViewCreatorLight">created by</text> {creator} </div>
            {ownership ? 
            <div className="activityViewOptionsOwner">
                <Link class="f6 link dim ph3 pv2 mb2 dib white ownerButtonEdit" to="update">Edit Activity</Link> 
                <div class="f6 link dim ph3 pv2 mb2 dib white ownerButtonDelete" onClick={fetchDelete}>Delete Activity</div> 
            </div> : null}
        </div>
        <div className="activityViewLocSec">
            <div className="activityLocViewIntro">activity location</div>
            <div className="activityLocView">{activity.location}</div>
        </div>
        <div className="activityViewDescSec">
            <div className="activityDescViewIntro">activity description</div>
            <div className="activityDescView">{activity.desc}</div>
        </div>
        <div className="activityViewPartiSec">
            <div className="activityViewPartiSecIntro">participants</div>
            <div className="activityViewPartiSecContent">
                <div className="activityViewPartiSecSpecial">Special Friends:</div>
                {participants.map((participant, i) => {
                    if(participant.type === 0){
                        return(<div className="activityViewPartiSecParticipant">
                                <Link to={"/profile/"+participant.id}>{participant.username}</Link>
                            </div>)
                    } else {
                        return (null)
                    }
                })}
                <div className="activityViewPartiSecBest">Best Buddies:</div>
                {participants.map((participant, i) => {
                    if(participant.type === 1){
                        return(<div className="activityViewPartiSecParticipant">
                                <Link to={"/profile/"+participant.id}>{participant.username}</Link>
                                </div>)
                    } else {
                        return (null)
                    }
                })}
            </div>
            {ownership ? null :
            (!joined ? 
            <div className="activityViewOptionsJoin">
                <div class="f6 link dim ph3 pv2 mb2 dib white userButtonJoin" onClick={fetchJoin}>Join Activity</div> 
            </div> : 
            <div className="alreadyJoin">
                <div class="f6 link dim ph3 pv2 mb2 dib white userButtonLeave" onClick={fetchLeave}>Leave Activity</div> 
            </div>) }
            <Comments userid={userid} comments={comments} actid={id}/>
        </div>
        
    </div>)
}

export default ActivityContent