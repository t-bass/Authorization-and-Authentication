import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
    items,
    onItemSelect,
    selectedItem,
    valueProperty,
    contentProperty
}) => {
    return (
        <ul className="list-group">
            {Object.keys({ ...items }).map((key) => {
                const item = items[key]
                return (
                    <li
                        key={item[valueProperty]}
                        className={
                            "list-group-item" +
                            (item === selectedItem ? " active" : "")
                        }
                        onClick={() => {
                            onItemSelect(item)
                        }}
                        role="button"
                    >
                        {item[contentProperty]}
                    </li>
                )
            })}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.array.isRequired
    ]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    selectedItem: PropTypes.object
}

export default GroupList
