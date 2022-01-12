import React, { useContext, useEffect, useState } from "react"
import userService from "../services/userService"
import PropTypes from "prop-types"
import { toast } from "react-toastify"

const UserContext = React.createContext()

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState()
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const getUsers = async () => {
        try {
            const { content } = await userService.fetchAll()
            setUsers(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        if (error !== null) toast(error)
        setError(null)
    }, [error])

    const getUser = (id) => {
        return users.find((user) => user._id === id)
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
        setLoading(false)
    }

    return (
        <UserContext.Provider
            value={{
                users,
                getUser
            }}
        >
            {!isLoading ? children : <h1>Loading...</h1>}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
