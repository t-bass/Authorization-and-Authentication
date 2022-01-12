import PropTypes from "prop-types"
import { useProfession } from "../../hooks/useProfessions"

const Profession = ({ id }) => {
    const { getProfession, isLoading } = useProfession()
    const profession = getProfession(id)

    return !isLoading ? profession.name : "Loading..."
}
Profession.propTypes = {
    id: PropTypes.string
}
export default Profession
