import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchTickets } from '../utils/api'

const getTickets =  createAsyncThunk(
    'tickets/getTickets',
    async (options) => {
        const { from, to } = options
        const { data } = await fetchTickets(from, to)
        return data.segments
    }
)

const initialState = {
    tickets: [],
    error: ''
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTickets.fulfilled, (state, { payload }) => {
            state.tickets.push(...payload)
        })
        builder.addCase(getTickets.rejected, (state, { payload }) => {
            state.error = 'такого билета не существует...😟'
        })
    }
})

export { getTickets }
// export const {  } = ticketsSlice.actions

export default ticketsSlice.reducer