import React from "react"
import PropTypes from "prop-types"

const Avatar = ({ hash, className, width, height, alt }) => {
    const url = "https://avatars.dicebear.com/api/avataaars/" + hash + ".svg"
    return <img src={url} className={className} width={width} />
}

Avatar.defaultProps = {
    width: "150",
    height: "150",
    alt: "Avatar",
    className: "rounded-circle"
}

Avatar.propTypes = {
    hash: PropTypes.string.isRequired,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alt: PropTypes.string
}

export default Avatar
