import React from "react"
import PropTypes from "prop-types"
import Qualitie from "./qualitie"
import { useQualities } from "../../../hooks/useQualities"

const QualitiesList = ({ qualities }) => {
    const { getQuality, isLoading } = useQualities()
    if (isLoading) return "Loading..."
    return (
        <>
            {qualities.map((id) => {
                const quality = getQuality(id)
                return <Qualitie quality={quality} key={quality._id} />
            })}
        </>
    )
}

QualitiesList.propTypes = {
    qualities: PropTypes.array
}

export default QualitiesList
