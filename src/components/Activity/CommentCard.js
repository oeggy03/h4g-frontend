import { useState } from "react"
import { Link } from "react-router-dom"

function CommentCard({comment, fetchDeleteComment, fetchEditComment, userid}) {
    const [editing, setEditing] = useState(false)
    const [editedComment, setEdited] = useState(comment.content)

    console.log(userid)

    return(
    <div className="commentWrapper">
        <div className="commentDetails">Posted by <Link to={"/profile/"+comment.userid} >{comment.creator}</Link> at {comment.postdate.slice(0,10)}, {comment.postdate.slice(11,19)} </div>
        {editing ? <textarea className="commentUpdateTextField" defaultValue={comment.content} onChange={input => setEdited(input.target.value)}/>
        : <div className="commentContent">{comment.content}</div>}
        {userid === comment.userid ? (!editing ? 
        <div>
            <text className="commentOptionEdit" onClick={() => setEditing(true)}>Edit </text>
            <text className="commentOptionDelete" onClick={() => fetchDeleteComment(comment.id)}>Delete </text>
        </div> : <text className="commentOptionEdit" onClick={() => fetchEditComment(comment.id, editedComment)}>Update Comment</text>)
        : null}
    </div>
    )
}

export default CommentCard