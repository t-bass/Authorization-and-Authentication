import { professionsObject as professions } from "./professions.api"
import { qualities } from "./qualities.api"

const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        email: "",
        name: "Джон Дориан",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
        completedMeetings: 36,
        rate: 2.5
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        email: "",
        name: "Кокс",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
        completedMeetings: 15,
        rate: 2.5
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        email: "",
        name: "Боб Келсо",
        sex: "male",
        profession: professions.doctor,
        qualities: [qualities.buller],
        completedMeetings: 247,
        rate: 3.5
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        email: "",
        name: "Рэйчел Грин",
        sex: "male",
        profession: professions.waiter,
        qualities: [qualities.uncertain],
        completedMeetings: 148,
        rate: 3.5
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        email: "",
        name: "Шелдон Купер",
        sex: "male",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 37,
        rate: 4.6
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        email: "",
        name: "Леонард Хофстедтер",
        sex: "male",
        profession: professions.physics,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 147,
        rate: 3.5
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        email: "",
        name: "Говард Воловиц",
        sex: "male",
        profession: professions.engineer,
        qualities: [qualities.strange, qualities.tedious],
        completedMeetings: 72,
        rate: 3.5
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        email: "",
        name: "Никола Тесла",
        sex: "male",
        profession: professions.engineer,
        qualities: [qualities.handsome],
        completedMeetings: 72,
        rate: 5
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        email: "",
        name: "Моника Геллер",
        sex: "female",
        profession: professions.cook,
        qualities: [qualities.strange, qualities.uncertain],
        completedMeetings: 17,
        rate: 4.5
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        email: "",
        name: "Рататуй",
        sex: "other",
        profession: professions.cook,
        qualities: [qualities.handsome, qualities.buller],
        completedMeetings: 17,
        rate: 4.5
    },
    {
        _id: "67rdca3eeb7f6fgeed47181f",
        email: "",
        name: "Джоуи Триббиани",
        sex: "male",
        profession: professions.actor,
        qualities: [qualities.uncertain, qualities.strange],
        completedMeetings: 434,
        rate: 3.5
    },
    {
        _id: "67rdca3eeb7f6fgeed47181r",
        email: "",
        name: "Брэд Питт",
        sex: "male",
        profession: professions.actor,
        qualities: [qualities.handsome],
        completedMeetings: 434,
        rate: 5
    }
]

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users))
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")))
        }, 2000)
    })
const update = (id, data) =>
    new Promise((resolve) => {
        const users = JSON.parse(localStorage.getItem("users"))
        const userIndex = users.findIndex((u) => u._id === id)
        users[userIndex] = { ...users[userIndex], ...data }
        localStorage.setItem("users", JSON.stringify(users))
        resolve(users[userIndex])
    })

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user._id === id
                )
            )
        }, 1000)
    })
export default {
    fetchAll,
    getById,
    update
}
