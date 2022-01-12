import React from "react"
import PropTypes from "prop-types"

const CheckboxField = ({ children, name, onChange, value, error }) => {
    const onHandleChange = ({ target }) => {
        const { name, checked } = target
        onChange({ name, value: checked })
    }

    return (
        <div className="mb-4">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={value}
                    id={name}
                    name={name}
                    onChange={onHandleChange}
                />
                <label
                    className={
                        "form-check-label" + (error ? " is-invalid" : "")
                    }
                    htmlFor={name}
                >
                    {children}
                </label>
                <div className="invalid-feedback">{error}</div>
            </div>
        </div>
    )
}

CheckboxField.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    value: PropTypes.bool,
    error: PropTypes.string
}

export default CheckboxField
