import axios from 'axios'
import { useEffect, useState } from 'react'
import FlightInput from './components/FlightInput'
import GetLocation from './components/GetLocation'
import Tickets from './components/Tickets'

const API_KEY = 'e321db0f-2d42-4b1b-b24e-82ee0b366c91'

function App() {

  const [tickets, setTickets] = useState([])

  const getTickets = async (from, to, date) => {

    if(from == to) return alert('Так нельзя')
    const { data } = await axios.get(`https://api.rasp.yandex.net/v3.0/search/?apikey=${API_KEY}&system=iata&transport_types=plane&format=json&from=${from}&to=${to}&lang=ru_RU&page=1&date=${date}`)

    setTickets(data.segments)
  }


  const handleSubmit = (from, to, date) => {
    getTickets(from, to, '2022-09-26')
  }

  return (
    <div className="App">
    <FlightInput 
      handleSubmit={handleSubmit}
    />
    <GetLocation />
    <Tickets tickets={tickets} />
    </div>
  );
}

export default App;
