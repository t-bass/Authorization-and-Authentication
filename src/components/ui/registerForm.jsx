import React, { useEffect, useState } from "react"
import TextField from "../common/form/textField"
import { validator } from "../../utils/validator"
import SelectField from "../common/form/selectField"
import RadioField from "../common/form/radioField"
import MultiSelectField from "../common/form/multiSelectField"
import CheckboxField from "../common/form/checkboxField"
import { useQualities } from "../../hooks/useQualities"
import { useProfession } from "../../hooks/useProfessions"
import { useAuth } from "../../hooks/useAuth"
import { useHistory } from "react-router-dom"

const RegisterForm = () => {
    const history = useHistory()
    const { signUp } = useAuth()
    const { professions } = useProfession()
    const { qualities } = useQualities()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        license: false
    })
    const [errors, setErrors] = useState({})

    const qualitiesList = qualities.map((q) => ({
        label: q.name,
        value: q._id
    }))

    const changeHandler = ({ name, value }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (validate()) {
            const newData = {
                ...formData,
                qualities: formData.qualities.map((q) => q.value)
            }
            try {
                await signUp(newData)
                history.push("/")
            } catch (e) {
                setErrors(e)
            }
        }
    }

    useEffect(() => {
        validate()
    }, [formData])

    const validarotConfig = {
        email: {
            isRequired: {
                message: "Email is required"
            },
            isEmail: {
                message: "Email is incorected"
            }
        },
        password: {
            isRequired: {
                message: "Password is required"
            },
            hasCapitalSymbol: {
                message: "Password must contain an uppercase letter"
            },
            hasNumber: {
                message: "Password must contain a digit"
            },
            minLength: {
                value: 8,
                message: "Password must contain at least 8 characters"
            },
            maxLength: {
                value: 200,
                message: "Password must contain no more than 200 characters"
            }
        },
        profession: {
            isRequired: {
                message: "Profession is required"
            }
        },
        license: {
            isRequired: {
                message: "You must agree before submitting."
            }
        }
    }

    const validate = () => {
        const errors = validator(formData, validarotConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                error={errors?.email}
            />
            <TextField
                label="Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
                error={errors?.password}
            />
            <SelectField
                label="Profession"
                name="profession"
                value={formData.profession}
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
                options={qualitiesList}
                onChange={changeHandler}
                name="qualities"
                label="Qualities"
            />
            <CheckboxField
                name="license"
                value={formData.license}
                onChange={changeHandler}
                error={errors?.license}
            >
                Agree to terms and conditions
            </CheckboxField>
            <button
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm
