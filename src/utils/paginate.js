export const paginate = (items, onPage, currentPage) => {
    return items.slice(
        (currentPage - 1) * onPage,
        (currentPage - 1) * onPage + onPage
    )
}
