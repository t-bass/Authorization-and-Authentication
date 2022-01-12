import React from "react"
import PropTypes from "prop-types"

const SearchRow = ({ value, onSearch }) => {
    return (
        <div className="row">
            <div className="col-auto w-100">
                <div className="input-group">
                    <input
                        type="text"
                        value={value}
                        className="form-control"
                        placeholder="Search..."
                        onChange={({ target }) => onSearch(target.value)}
                    />
                    {value && (
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            aria-label="Clear"
                            onClick={({ target }) => onSearch("")}
                        >
                            X
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

SearchRow.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default SearchRow
