import React from "react"
import useMockData from "../utils/mockData"

const MainPage = () => {
    const { error, initialize, progress, status } = useMockData()
    const onClickHandler = () => {
        console.log("Clicked")
        initialize()
    }
    return (
        <div className="container mt-5">
            <h2>Main page</h2>
            <h3>Инициализация данных в firebase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Progress: {progress}%</li>
                {error && <li>Error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={onClickHandler}>
                Инициализация
            </button>
        </div>
    )
}

export default MainPage
