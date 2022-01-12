import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import api from "../../../api"
import { useHistory } from "react-router"
import TextField from "../../common/form/textField"
import { validator } from "../../../utils/validator"
import SelectField from "../../common/form/selectField"
import MultiSelectField from "../../common/form/multiSelectField"
import RadioField from "../../common/form/radioField"

const UserEditPage = ({ id }) => {
    const [formData, setFormData] = useState()
    const [professions, setProfessions] = useState([])
    const [qualities, setQualities] = useState([])
    const history = useHistory()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        validate()
    }, [formData])

    useEffect(() => {
        api.users.getById(id).then((result) => {
            setFormData(result)
        })
        api.professions.fetchAll().then((result) => setProfessions(result))
        api.qualities.fetchAll().then((result) => setQualities(result))
    }, [])

    const validarotConfig = {
        name: {
            isRequired: {
                message: "Name is required"
            }
        },
        email: {
            isRequired: {
                message: "Email is required"
            },
            isEmail: {
                message: "Email is incorected"
            }
        }
    }

    const validate = () => {
        const errors = validator(formData, validarotConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const changeHandler = ({ name, value }) => {
        if (name === "profession") {
            value = professions.find((profession) => profession._id === value)
        }
        if (name === "qualities") {
            value = value.map((item) =>
                Object.values(qualities).find(
                    (quality) => quality._id === item.value
                )
            )
        }
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        if (validate()) {
            api.users.update(id, formData)
            goBackHandler()
        }
    }

    const goBackHandler = () => {
        history.push("/users/" + id + "")
    }

    if (!formData) return <>Loading...</>

    return (
        <>
            <div className="container">
                <button className="btn btn-primary" onClick={goBackHandler}>
                    Go back
                </button>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={changeHandler}
                        error={errors?.name}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        error={errors?.email}
                    />
                    <SelectField
                        label="Profession"
                        name="profession"
                        value={formData.profession._id}
                        onChange={changeHandler}
                        options={professions.map((profession) => ({
                            name: profession.name,
                            value: profession._id
                        }))}
                        error={errors?.profession}
                        defaultOption="Choose..."
                    />
                    <RadioField
                        options={[
                            { name: "Male", value: "male" },
                            { name: "Female", value: "female" },
                            { name: "Other", value: "other" }
                        ]}
                        value={formData.sex}
                        onChange={changeHandler}
                        name="sex"
                        label="Sex"
                    />
                    <MultiSelectField
                        options={qualities}
                        onChange={changeHandler}
                        name="qualities"
                        label="Qualities"
                        value={formData.qualities.map((quality) => ({
                            label: quality.name,
                            value: quality._id
                        }))}
                    />
                    <button
                        disabled={!isValid}
                        className="btn btn-primary w-100"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}
UserEditPage.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default UserEditPage
