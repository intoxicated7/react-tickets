import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AIROPORT_CODES_IATA } from '../../../utils/constants'
import { filteredCities } from '../../../utils/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './FlightInput.module.scss'
import { getTickets } from '../../../store/tickets'

const FlightInput = () => {

  const dispatch = useDispatch()

  const [from, setFrom] = useState({ city: '', code: '' })

  const [to, setTo] = useState({ city: '',code: '' })

  const [dropdown, setDropdown] = useState({ from: false, to: false, date: false })

  const [date, setDate] = useState('сегодня')

  const handleInput = (way, city) => {
    if (way == 'from') {
      setFrom(prevState => ({
        ...prevState,
        city: city
      }))
    }

    if (way == 'to') {
      setTo(prevState => ({
        ...prevState,
        city: city
      }))
    }
  }

  const handleHint = () => {
    setFrom(prevState => ({
      ...prevState,
      city: 'Москва',
      code: 'SVO'
    }))

    setTo(prevState => ({
      ...prevState,
      city: 'Санкт-Петербург',
      code: 'LED'
    }))
  }

  const handleDropdown = (way, city, code) => {
    if (way == 'from') {
      setFrom(prevState => ({
        ...prevState,
        city: city,
        code: code
      }))
    }

    if (way == 'to') {
      setTo(prevState => ({
        ...prevState,
        city: city,
        code: code
      }))
    }
  }

  const handleDropdownOpen = (way) => {
    if (way == 'from') {
      setDropdown(prevState => ({
        ...prevState,
        from: true,
        to: false,
        date: false
      }))
    }

    if (way == 'to') {
      setDropdown(prevState => ({
        ...prevState,
        from: false,
        to: true,
        date: false
      }))
    }
  }

  const reverseWay = () => {
    setFrom(prevState => ({
      ...prevState,
      city: to.city,
      code: to.code
    }))

    setTo(prevState => ({
      ...prevState,
      city: from.city,
      code: from.code
    }))
  }

  return (
    <div>
      <form className={styles.FlightForm} onSubmit={(e) => e.preventDefault() & dispatch(getTickets({from: from.code, to: to.code}))}>
        <div>
          <input 
            onFocus={() => handleDropdownOpen('from')} 
            onBlur={() => setDropdown(prevState => ({...prevState, from: false }))}
            type="text" 
            placeholder="Откуда" 
            value={from.city} 
            onChange={(e) => handleInput('from', e.target.value)}
          />
            {
              dropdown.from ? 
                <div className={styles.dropdown}>
                  <ul>
                    {
                      filteredCities(AIROPORT_CODES_IATA, from.city).map(city => (
                        <li key={city.code} onMouseDown={(e) => e.preventDefault()} onClick={() => handleDropdown('from', city.city, city.code)}>{city.city} ({city.code})</li>  
                      ))
                    }
                  </ul>
                </div> 
                : ''
            }
        </div>
        <div>
            <button onClick={() => reverseWay()}>
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            </button>
        </div>
        <div>
          <input 
            onFocus={() => handleDropdownOpen('to')} 
            onBlur={(e) => setDropdown(prevState => ({...prevState, to: false, from: false, date: false}))}
            type="text" placeholder="Куда" 
            value={to.city} 
            onChange={(e) => handleInput('to', e.target.value)} />
            {
              dropdown.to ? 
                <div className={styles.dropdown}>
                  <ul>
                    {
                      filteredCities(AIROPORT_CODES_IATA, to.city).map(city =>  (
                        <li key={city.code} onMouseDown={(e) => e.preventDefault()} onClick={() => handleDropdown('to', city.city, city.code)}>{city.city} ({city.code})</li>
                      ))
                    }
                  </ul>
                </div> 
                  : ''
                }
          </div>
          <div>
            <input
              // onFocus={() => handleDropdownDate()} 
              type="text" 
              placeholder="Когда" 
              defaultValue={date} 
              onChange={(e) => setDate(e.target.value)} 
            />
                
          </div>
          <button className={styles.btn__Submit} onSubmit={(e) => e.preventDefault() & dispatch(getTickets(from.code, to.code))}><span>Найти</span></button>      
      </form>
      <div className={styles.btn__hint}>
            <span>Например,
                <button onClick={() => handleHint()}>
                    Москва - Санкт-Петербург
                </button>
            </span>
        </div>
    </div>
  )
}

export default FlightInput