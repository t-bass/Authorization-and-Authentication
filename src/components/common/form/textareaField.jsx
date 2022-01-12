import React from "react"
import PropTypes from "prop-types"

const TextareaField = ({ label, name, value, onChange, rows, error }) => {
    const onHandleChange = ({ target }) => {
        const { name, value } = target
        onChange({ name, value })
    }

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>

            <textarea
                className={
                    "form-control" + (!error ? " is-valid" : " is-invalid")
                }
                id={name}
                name={name}
                value={value}
                rows={rows}
                onChange={onHandleChange}
            ></textarea>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}
TextareaField.defaultProps = {
    type: "text",
    rows: 3
}
TextareaField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.number,
    error: PropTypes.string
}

export default TextareaField
