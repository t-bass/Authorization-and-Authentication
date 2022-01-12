const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const padding = (value, count) => {
    count = count ?? 2
    return String(value).padStart(count, "0")
}

export const dateFormat = (timestamp) => {
    timestamp = Number(timestamp)
    const now = new Date()
    const date = new Date(timestamp)
    const diff = Math.floor((now.getTime() - timestamp) / 1000 / 60)

    if (diff < 1) {
        return "1 минуту назад"
    } else if (diff < 5) {
        return "5 минут назад"
    } else if (diff < 10) {
        return "10 минут назад"
    } else if (diff < 30) {
        return "30 минут назад"
    } else if (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate()
    ) {
        return date.getHours() + ":" + date.getMinutes()
    } else if (date.getFullYear() === now.getFullYear()) {
        return monthNames[date.getMonth()] + " " + date.getDate()
    } else {
        return (
            padding(date.getDate()) +
            "." +
            padding(date.getMonth() + 1) +
            "." +
            date.getFullYear()
        )
    }
}
