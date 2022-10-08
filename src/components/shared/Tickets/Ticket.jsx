import React from 'react'
import styles from './Tickets.module.scss'
import { format } from 'date-fns'

const Ticket = ({ ticket }) => {

  return (
<div className={styles.Tickets_body}>
  <div className={styles.Ticket_body__company}>
    <div>
      <img src={ticket.thread.carrier.logo_svg} alt={ticket.thread.carrier.title} />
    </div>
    <div className={styles.Ticket_body__company_info}>
      <span>{ticket.thread.carrier.title}</span>
      <small>{ticket.thread.vehicle}</small>
    </div>
  </div>
  <div className={styles.Tickets_body__departure}>
    {format(new Date(ticket.departure), 'p')}	
    <span>{ticket.from.title}</span>
  </div>
  <div className={styles.Tickets_body__durtion}>
    {ticket.duration / 60} мин
  </div>
  <div className={styles.Tickets_body__arrival}>
    {format(new Date(ticket.arrival), 'p')}
    <span>{ticket.to.title}</span>
  </div>
  <div className={styles.Tickets_body__buyBtn}>
    <button>Купить</button>
  </div>
</div>
  )
}

export default Ticket