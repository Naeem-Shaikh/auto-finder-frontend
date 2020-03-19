import api from './Api'
import baseURL from './Http'

export const getCarsDetails = async () => {
    try {
        const res = await api.get(baseURL + '/api/cars')
        return res.data
    } catch (error) {

    }
}
export const getCarDetails = async (model) => {
    try {
        const res = await api.get(`${baseURL}/api/cars/model/${model}`)
        return res.data
    } catch (error) {

    }
}

export const addCarDetails = async (car) => {
    try {
        const res = await api.post(baseURL + '/api/cars', car)
        return res
    } catch (error) {

    }
}

export const deleteCarDetails = async (id) => {
    await api.delete(`${baseURL}/api/cars/${id}`)
}

