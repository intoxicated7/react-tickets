import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './GetLocation.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const GetLocation = () => {

  const [city, setCity] = useState()

  useEffect(() => {
    const Location = async () => {
      const { data } = await axios.get('https://ipapi.co/json/')

      setCity(data.city)
    }
  
    Location()
  }, [])

  return (
    <div className={styles.GeoStyle}>
      <FontAwesomeIcon className={styles.GeoStyle__fontawesome} icon={faLocationArrow} />
      <span>{city}</span>
    </div>
  )
}

export default GetLocation