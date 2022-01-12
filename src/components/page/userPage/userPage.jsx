import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import api from "../../../api"
import { useHistory } from "react-router"
import UserCard from "../../ui/userCard"
import QualitiesCard from "../../ui/qualitiesCard"
import MeetingsCard from "../../ui/meetingsCard"
import { CommentsList, NewCommentForm } from "../../ui/comments"

const UserPage = ({ id }) => {
    const [user, setUser] = useState()
    const [comments, setComments] = useState([])
    const history = useHistory()

    const editUserHandle = () => {
        history.push("/users/" + id + "/edit")
    }
    const onDeleteCommentHandler = (id) => {
        api.comments.remove(id)
        loadComments()
    }
    const onAddMessageHanler = (data) => {
        api.comments.add(data)
        loadComments()
    }

    const loadComments = () => {
        api.comments.fetchCommentsForUser(id).then((result) => {
            setComments(result)
        })
    }

    useEffect(() => {
        api.users.getById(id).then((result) => {
            setUser(result)
        })
        loadComments()
    }, [])

    if (!user) return <>Loading...</>

    return (
        <>
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard
                            user={user}
                            onEditUserClick={editUserHandle}
                        />
                        <QualitiesCard qualities={user.qualities} />
                        <MeetingsCard
                            completedMeetings={user.completedMeetings}
                        />
                    </div>

                    <div className="col-md-8">
                        <NewCommentForm
                            pageId={id}
                            onAddMessage={onAddMessageHanler}
                        />
                        <CommentsList
                            comments={comments}
                            onDeleteComment={onDeleteCommentHandler}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
UserPage.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default UserPage
