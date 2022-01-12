import React, { useEffect, useState } from "react"
import api from "../../../api"
import SelectField from "../../common/form/selectField"
import TextareaField from "../../common/form/textareaField"
import { validator } from "../../../utils/validator"
import PropTypes from "prop-types"

const NewCommentForm = ({ pageId, onAddMessage }) => {
    const [formData, setFormData] = useState({
        user: "",
        message: ""
    })
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState({})

    useEffect(() => {
        api.users.fetchAll().then((result) => setUsers(result))
    }, [])

    useEffect(() => {
        validate()
    }, [formData])

    const changeHandler = ({ name, value }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const validarotConfig = {
        user: {
            isRequired: {
                message: "User is required"
            }
        },
        message: {
            isRequired: {
                message: "Message is required"
            }
        }
    }
    const validate = () => {
        const errors = validator(formData, validarotConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (event) => {
        event.preventDefault()
        if (validate()) {
            onAddMessage({
                pageId: pageId,
                userId: formData.user,
                content: formData.message
            })
            setFormData({
                user: "",
                message: ""
            })
        }
    }

    return (
        <div className="card mb-2">
            <div className="card-body">
                <div>
                    <h2>New comment</h2>
                    <form onSubmit={handleSubmit}>
                        <SelectField
                            name="user"
                            value={formData.user}
                            onChange={changeHandler}
                            options={users.map((user) => ({
                                name: user.name,
                                value: user._id
                            }))}
                            defaultOption="Select user"
                            error={errors.user}
                        />
                        <TextareaField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={changeHandler}
                            error={errors.message}
                        />

                        <button
                            className="btn btn-primary float-end"
                            disabled={!isValid}
                        >
                            Publish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

NewCommentForm.propTypes = {
    pageId: PropTypes.string,
    onAddMessage: PropTypes.func.isRequired
}

export default NewCommentForm
