import React from 'react'
import { useSelector } from 'react-redux'
import Ticket from './Ticket'
import { Error } from '../../ui'

const Tickets = () => {

  const { tickets, error } =  useSelector(state => state.tickets)

  if (error) return <Error error={error} />
  return (
    <div> 
        {tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} />)}
    </div>
  )
}

export default Tickets