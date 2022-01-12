import React from "react"
import PropTypes from "prop-types"
import Table, { TableHeader, TableBody } from "../common/table"

const UserTable = ({ users, onSort, selectedSort, columns, ...rest }) => {
    return (
        <Table {...{ data: users, onSort, selectedSort, columns }}>
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ data: users, columns }} />
        </Table>
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object.isRequired
}

export default UserTable
