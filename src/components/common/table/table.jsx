import React from "react"
import TableHeader from "./teableHeader"
import TableBody from "./tableBody"
import PropTypes from "prop-types"

const Table = ({ data, onSort, selectedSort, columns, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ data, columns }} />
                </>
            )}
        </table>
    )
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    children: PropTypes.array
}

export default Table
