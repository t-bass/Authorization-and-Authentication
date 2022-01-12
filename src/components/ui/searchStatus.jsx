import React from "react"
import { countFormat } from "../../lib"
import PropTypes from "prop-types"

const SearchStatus = ({ usersCount }) => {
    const renderPhrase = (count) => {
        if (!count) return `Никто с тобой не тусанёт`
        return `${count} ${countFormat(count, [
            "человек",
            "человека",
            "человек"
        ])} тусанёт с тобой сегодня`
    }

    const headerClass = ["badge", usersCount ? "bg-primary" : "bg-danger"].join(
        " "
    )

    return (
        <h2>
            <span className={headerClass}>{renderPhrase(usersCount)}</span>
        </h2>
    )
}

SearchStatus.propTypes = {
    usersCount: PropTypes.number.isRequired
}

export default SearchStatus
