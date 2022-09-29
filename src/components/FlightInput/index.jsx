import React, { useState } from 'react'
import cities from '../../assets/airoportCode.js'


import styles from './FlightInput.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'

const FlightInput = ({ handleSubmit }) => {

  const [fromCode, setFromCode] = useState('')
  const [from, setFrom] = useState('')
  const [toCode, setToCode] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('сегодня')
  
  const [dropdownFrom, setDropdownFrom] = useState(false)
  const [dropdownTo, setDropdownTo] = useState(false)
  const [dropdownDate, setDropdownDate] = useState(false)


  const handleHint = () => {
    setFromCode('SVO')
    setToCode('LED')
    setFrom('Москва')
    setTo('Санкт-Петербург')
  }

  const handleDropdownFrom = (city, code) => {
    setDropdownFrom(false)
    setFrom(city)
    setFromCode(code)
  }

  const handleDropdownTo = (city, code) => {
    setDropdownTo(false)
    setTo(city)
    setToCode(code)
  }

  const handleDropdownFromOpen = () => {
    setDropdownFrom(true)
    setDropdownTo(false)
    setDropdownDate(false)
  }

  const handleDropdownToOpen = () => {
    setDropdownFrom(false)
    setDropdownDate(false)
    setDropdownTo(true)
  }

  const handleInputFrom = (e) => {
    setFrom(e.target.value)  

  }

  const handleInputTo = (e) => {
    setTo(e.target.value)  
  }

  const filteredCitiesFrom = cities.filter((city) => {
    if (from === '') {
      return city;
    }
    else {
      return city.city?.toLowerCase().includes(from)
    }
  }) 

  const filteredCitiesTo = cities.filter((city) => {
    if (to === '') {
      return city;
    }
    else {
      return city.city?.toLowerCase().includes(to)
    }
  }) 

  const reverseWay = () => {
    setFrom(to)
    setFromCode(toCode)
    setTo(from)
    setToCode(fromCode)
  }

  const handleDropdownDate = () => {
    setDropdownDate(true)
    setDropdownFrom(false)
    setDropdownTo(false)
  }

  return (
    <div>
        <form className={styles.FlightForm} onSubmit={(e) => e.preventDefault() & handleSubmit(fromCode, toCode, date)}>
            <div>
                <input 
                onFocus={() => handleDropdownFromOpen()} 
                type="text" 
                placeholder="Откуда" 
                value={from} 
                onChange={(e) => handleInputFrom(e)} />
                {
                    dropdownFrom ? 
                    <div className={styles.dropdown}>
                        <ul>
                            {
                                filteredCitiesFrom.map(city => (
                                  <li key={city.code} onClick={() => handleDropdownFrom(city.city, city.code)}>{city.city} ({city.code})</li>  
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
                onFocus={() => handleDropdownToOpen()} 
                type="text" placeholder="Куда" 
                value={to} 
                onChange={(e) => handleInputTo(e)} />
                {
                    dropdownTo ? 
                    <div className={styles.dropdown}>
                        <ul>
                            {
                                filteredCitiesTo.map(city => (
                                  <li key={city.code} onClick={() => handleDropdownTo(city.city, city.code)}>{city.city} ({city.code})</li>  
                                ))
                            }
                        </ul>
                    </div> 
                    : ''
                }
            </div>
            <div>
                <input
                  onFocus={() => handleDropdownDate()} 
                  type="text" 
                  placeholder="Когда" 
                  defaultValue={date} 
                  onChange={(e) => setDate(e.target.value)} 
                />
                
            </div>
            <button className={styles.btn__Submit} onSubmit={handleSubmit}><span>Найти</span></button>
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