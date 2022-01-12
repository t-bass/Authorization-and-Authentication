import React from "react"
import PropTypes from "prop-types"

const Qualitie = ({ quality }) => {
    const style = ["badge", "m-1", "bg-" + quality.color].join(" ")
    return <span className={style}>{quality.name}</span>
}

Qualitie.propTypes = {
    quality: PropTypes.object.isRequired
}

export default Qualitie
