import professions from "../mockData/professions.json"
import qualities from "../mockData/qualities.json"
import users from "../mockData/users.json"
import { useEffect, useState } from "react"
import httpService from "../services/httpService"

const useMockData = () => {
    const statusConst = {
        idle: "Not started",
        pending: "In process",
        successed: "Ready",
        error: "Error occured"
    }
    const [error, setError] = useState(null)
    const [status, setStatus] = useState(statusConst.idle)
    const [progress, setProgress] = useState(0)
    const [count, setCount] = useState(0)
    const summuryCount = professions.length + qualities.length + users.length
    const incrementCount = () => {
        setCount((PrevState) => PrevState + 1)
    }
    const updateProggres = () => {
        if (count !== 0 && status === statusConst.idle) {
            setStatus(statusConst.pending)
        }
        const newProgress = Math.floor((count / summuryCount) * 100)
        if (progress < newProgress) setProgress(() => newProgress)
        if (newProgress === 100) setStatus(statusConst.successed)
    }
    useEffect(() => {
        updateProggres()
    }, [count])

    async function initialize() {
        try {
            for (const prof of professions) {
                await httpService.put("profession/" + prof._id, prof)
                incrementCount()
            }
            for (const quality of qualities) {
                await httpService.put("quality/" + quality._id, quality)
                incrementCount()
            }
            for (const user of users) {
                await httpService.put("user/" + user._id, user)
                incrementCount()
            }
        } catch (e) {
            setError(e)
            setStatus(statusConst.error)
        }
    }

    return { error, initialize, progress, status }
}
export default useMockData
