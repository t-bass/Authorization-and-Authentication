import httpService from "./httpService"

const professionEndPoint = "profession/"

const professionService = {
    get: async (id) => {
        const { data } = await httpService.get(professionEndPoint + id)
        return data
    },
    fetchAll: async () => {
        const { data } = await httpService.get(professionEndPoint)
        return data
    }
}

export default professionService
