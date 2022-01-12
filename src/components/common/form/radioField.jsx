import React from "react"
import PropTypes from "prop-types"

const RadioField = ({ options, name, onChange, value, label }) => {
    const onHandleChange = ({ target }) => {
        const { name, value } = target
        onChange({ name, value })
    }

    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <div>
                {options.map((option, i) => (
                    <div className="form-check form-check-inline" key={i}>
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.name + "_" + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={onHandleChange}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={option.name + "_" + option.value}
                        >
                            {option.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RadioField

RadioField.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
