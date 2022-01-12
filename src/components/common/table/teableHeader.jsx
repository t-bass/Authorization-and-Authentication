import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (!item) return
        if (selectedSort.sort === item && selectedSort.order === "asc") {
            onSort({ sort: item, order: "desc" })
        } else {
            onSort({ sort: item, order: "asc" })
        }
    }
    const sortDirectionArrow = (item) => {
        if (selectedSort.sort !== item) return ""
        if (selectedSort.order === "asc") {
            return <i className="bi bi-caret-up-fill"></i>
        } else {
            return <i className="bi bi-caret-down-fill"></i>
        }
    }

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((key) => (
                    <th
                        key={key}
                        onClick={() => handleSort(columns[key].path)}
                        scope="col"
                        {...{ role: columns[key].path && "button" }}
                    >
                        {columns[key].name}
                        {sortDirectionArrow(columns[key].path)}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
