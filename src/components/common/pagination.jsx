import React from "react"
import PropTypes from "prop-types"

const Pagination = ({ elementsCount, onPage, currentPage, onPageChange }) => {
    const calcPages = () => {
        return Math.ceil(elementsCount / onPage)
    }

    const getPages = () => {
        return [...Array(calcPages())].map((item, i) => i + 1)
    }

    const onClick = (e, page) => {
        e.preventDefault()
        onPageChange(page)
    }

    const onIncrement = (e) => {
        e.preventDefault()
        onPageChange(currentPage + 1)
    }

    const onDecrement = (e) => {
        e.preventDefault()
        onPageChange(currentPage - 1)
    }

    if (calcPages() <= 1) {
        return null
    }

    return (
        <nav>
            <ul className="pagination">
                <li
                    className={
                        "page-item " + (currentPage <= 1 ? "disabled" : "")
                    }
                >
                    <a
                        href="#"
                        className="page-link"
                        tabIndex="-1"
                        onClick={onDecrement}
                    >
                        Previous
                    </a>
                </li>
                {getPages().map((page) => {
                    return (
                        <li
                            className={
                                "page-item" +
                                (page === currentPage ? " active" : "")
                            }
                            key={page}
                        >
                            <a
                                href="#"
                                className="page-link"
                                onClick={(e) => onClick(e, page)}
                            >
                                {page}
                            </a>
                        </li>
                    )
                })}

                <li
                    className={
                        "page-item " +
                        (currentPage >= calcPages() ? "disabled" : "")
                    }
                >
                    <a href="#" className="page-link" onClick={onIncrement}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    elementsCount: PropTypes.number.isRequired,
    onPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination
