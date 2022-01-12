import React from "react"
import { useParams } from "react-router-dom"
import UserListPage from "../components/page/userListPage"
import UserPage from "../components/page/userPage"
import PropTypes from "prop-types"
import UserEditPage from "../components/page/userEditPage"

const UsersPage = ({ mode }) => {
    const params = useParams()
    const { userID } = params
    console.log("mode", mode)
    switch (mode) {
        case "view":
            return <UserPage id={userID} />
        case "edit":
            return <UserEditPage id={userID} />
        case "list":
            return <UserListPage />
    }
}

UsersPage.defaultProps = {
    mode: "view"
}
UsersPage.propTypes = {
    mode: PropTypes.string
}

export default UsersPage
