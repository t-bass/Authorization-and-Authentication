import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import professionService from "../services/professionService"

const ProfessionContext = React.createContext()

export const useProfession = () => {
    return useContext(ProfessionContext)
}

export const ProfessionProvider = ({ children }) => {
    const [professions, setProfessions] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const getProfessions = async () => {
        try {
            const { content } = await professionService.fetchAll()
            setProfessions(content)
            setLoading(false)
        } catch (error) {
            errorCatcher(error)
        }
    }

    useEffect(() => {
        getProfessions()
    }, [])

    useEffect(() => {
        if (error !== null) toast(error)
        setError(null)
    }, [error])

    const getProfession = (id) => {
        return professions.find((profession) => profession._id === id)
    }

    function errorCatcher(error) {
        const { message } = error.response.data
        setError(message)
        setLoading(false)
    }

    return (
        <ProfessionContext.Provider
            value={{
                professions,
                getProfession,
                isLoading
            }}
        >
            {children}
        </ProfessionContext.Provider>
    )
}

ProfessionProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
