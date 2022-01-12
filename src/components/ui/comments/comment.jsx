import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import api from "../../../api"
import Avatar from "../../common/avatar"
import { dateFormat } from "../../../utils/dateFormat"

const Comment = ({ comment, onDeleteClick }) => {
    const { userId } = comment
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(userId).then((result) => {
            setUser(result)
        })
    }, [])

    return (
        <div className="bg-light card-body mb-3">
            <div className="row">
                <div className="col">
                    {user
                        ? (
                            <div className="d-flex flex-start">
                                <Avatar
                                    hash={user.name}
                                    width="65"
                                    height="65"
                                    alt="avatar"
                                    className="rounded-circle shadow-1-strong me-3"
                                />

                                <div className="flex-grow-1 flex-shrink-1">
                                    <div className="mb-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="mb-1">
                                                {user.name}
                                                <span className="small ms-2">
                                                    {dateFormat(comment.created_at)}
                                                </span>
                                            </p>
                                            <button
                                                className="btn btn-sm text-primary d-flex align-items-center"
                                                onClick={onDeleteClick}
                                            >
                                                <i className="bi bi-x-lg"></i>
                                            </button>
                                        </div>
                                        <p className="small mb-0">
                                            {comment.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                        : (
                            "loading..."
                        )}
                </div>
            </div>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}

export default Comment
