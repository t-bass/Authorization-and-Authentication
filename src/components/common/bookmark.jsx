import React from "react"
import { PropTypes } from "prop-types"

const Bookmark = ({ user, onToggle }) => {
    const style = "bi " + (user.marked ? "bi-star-fill" : "bi-star")
    return (
        <i
            className={style}
            role="button"
            onClick={() => onToggle(user._id)}
        ></i>
    )
}

Bookmark.propTypes = {
    user: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default Bookmark
