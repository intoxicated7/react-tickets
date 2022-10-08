import axios from 'axios'
import { API_KEY, API_URI, API_SYSTEM } from '../constants'

const fetchTickets = async (from, to) => {
    return await axios.get(`${API_URI}/v3.0/search/?apikey=${API_KEY}&system=${API_SYSTEM[0].iata}&transport_types=plane&format=json&from=${from}&to=${to}&lang=ru_RU&page=1&date=2022-10-05`)
}

export { fetchTickets }