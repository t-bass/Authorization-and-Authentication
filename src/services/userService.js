import httpService from "./httpService"

const userEndPoint = "user/"

const userService = {
    update: async (id, content) => {
        const { data } = await httpService.put(userEndPoint + id, content)
        return data
    },
    get: async (id) => {
        const { data } = await httpService.get(userEndPoint + id)
        return data
    },
    fetchAll: async () => {
        const { data } = await httpService.get(userEndPoint)
        return data
    },
    create: async (content) => {
        const { data } = await httpService.post(userEndPoint, content)
        return data
    },
    delete: async (id) => {
        const { data } = await httpService.delete(userEndPoint + id)
        return data
    }
}

export default userService
