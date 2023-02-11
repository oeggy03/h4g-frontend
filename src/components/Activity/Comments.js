import { useState } from "react"
import { Link } from "react-router-dom"
import CommentCard from "./CommentCard"

function Comments({userid, comments, actid}){
    const [createdComment, setCreated] = useState("")

    function fetchDeleteComment(id) {

        const fetchOptions = {
            method: 'DELETE',
            credentials: 'include'
        }

        fetch("http://localhost:3001/api/DeleteComment/"+String(id), fetchOptions)
        .then(response => {
            console.log(response.status)
            if (response.status === 200){
                alert("Comment deleted successfully")
            } else {
                alert("Something went wrong. Please check that you are signed in!")
            }
        }).then(res =>{window.location.reload(false);})
    }

    function fetchEditComment(id, content) {
        const data = {
            id:id,
            content:content
        }
        
        const fetchOptions = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: (JSON.stringify(data)), // body data type must match "Content-Type" header
            credentials: 'include'
        }
        fetch('http://localhost:3001/api/UpdateComment', fetchOptions)
        .then(response => {
            if (response.status === 200) {alert("Comment updated successfully!")} 
            else {alert("Something went wrong. Please make sure that you are signed in.")}

            return response.json()})
        .then(res => {window.location.reload(false);})
    }

    function postComment() {
        console.log(actid)
        const data = {
            content:createdComment,
            activity_id:String(actid)
        }
        console.log(data);
        
        const fetchOptions = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: (JSON.stringify(data)), // body data type must match "Content-Type" header
            credentials: 'include'
        }
        fetch('http://localhost:3001/api/CreateComment', fetchOptions)
        .then(response => {
            if (response.status === 200) {
                alert("Comment posted successfully!")
            } else {
                alert("Sorry, something went wrong. Please check if you are logged in")
            }
            return response.json()})
        .then(res => {window.location.reload(false);});
    }

    return(
    <div className="activityViewChatContent">
        <div className="activityViewChatSecIntro">chat</div>
        <div className="commentFullSection">
            <div className="commentCards">
            {comments.length === 0 ? 
                <div className="noCommentsYet">No comments yet. </div> : 
                comments.map((comment, i) => {
                    return(<CommentCard comment={comment} fetchDeleteComment={fetchDeleteComment} fetchEditComment={fetchEditComment} userid={userid}/>)
                })}
            </div>
            <div className="commentCreationSection">
                <textarea className="commentCreationTextField" onChange={input => setCreated(input.target.value)}/>
                <div class="f6 link dim ph3 pv2 dib white postCommentButton" onClick={postComment}>Post Comment</div> 
            </div>
        </div>
    </div>)
}

export default Comments