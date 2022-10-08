import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import styles from './GetLocation.module.scss'

const GetLocation = () => {

  const [city, setCity] = useState()

  const Location = async () => {
    const { data } = await axios.get('https://ipapi.co/json/')

    setCity(data.city)
  }

  useEffect(() => {  
    Location()
  }, [])

  if (city) return (
    <div className={styles.GeoStyle}>
      <FontAwesomeIcon className={styles.GeoStyle__fontawesome} icon={faLocationArrow} />
      <span>{city}</span>
    </div> 
  )
}

export default GetLocation