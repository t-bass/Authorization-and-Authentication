import React from "react"
import Comment from "./comment"
import PropTypes from "prop-types"

const CommentsList = ({ comments, onDeleteComment }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h2>Comments</h2>
                <hr />
                {comments
                    .sort((a, b) => b.created_at - a.created_at)
                    .map((comment) => (
                        <Comment
                            comment={comment}
                            key={comment._id}
                            onDeleteClick={() => {
                                onDeleteComment(comment._id)
                            }}
                        />
                    ))}
            </div>
        </div>
    )
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired,
    onDeleteComment: PropTypes.func.isRequired
}

export default CommentsList
