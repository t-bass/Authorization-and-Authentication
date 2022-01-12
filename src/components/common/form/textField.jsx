import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ label, name, value, onChange, type, error }) => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const onHandleChange = ({ target }) => {
        const { name, value } = target
        onChange({ name, value })
    }

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={onHandleChange}
                    className={
                        "form-control" + (!error ? " is-valid" : " is-invalid")
                    }
                />
                {type === "password" && (
                    <button
                        onClick={toggleShowPassword}
                        className="btn btn-outline-secondary"
                    >
                        <i
                            className={
                                "bi " +
                                (showPassword ? "bi-eye-slash" : "bi-eye")
                            }
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
TextField.defaultProps = {
    type: "text"
}
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    error: PropTypes.string
}

export default TextField
