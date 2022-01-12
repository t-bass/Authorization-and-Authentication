import React, { useEffect, useState } from "react"
import TextField from "../common/form/textField"
import { validator } from "../../utils/validator"
import CheckboxField from "../common/form/checkboxField"
import { useAuth } from "../../hooks/useAuth"
import { toast } from "react-toastify"
import { useHistory } from "react-router-dom"

const LoginForm = () => {
    const history = useHistory()
    const { signIn } = useAuth()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    })
    const [errors, setErrors] = useState({})

    const changeHandler = ({ name, value }) => {
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (validate()) {
            try {
                await signIn(formData)
                console.log("logIn OK")
                history.push("/")
            } catch (e) {
                toast.error(e.error)
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
            <CheckboxField
                name="rememberMe"
                value={formData.rememberMe}
                onChange={changeHandler}
            >
                Remember me
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

export default LoginForm
