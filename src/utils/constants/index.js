const API_KEY = 'e321db0f-2d42-4b1b-b24e-82ee0b366c91'

const API_URI = 'https://api.rasp.yandex.net'

const API_SYSTEM = [
    {
        yandex: 'yandex',
        iata: 'iata',
        sirena: 'sirena',
        express: 'express',
        esr: 'esr'
    }
] 

const AIROPORT_CODES_IATA = [
    {
        city: 'Санкт-Петербург',
        code: 'LED'
    },
    {
        city: 'Москва, Шереметьево',
        code: 'SVO'
    },
    {
        city: 'Москва, Внуково',
        code: 'VKO'
    },
    {
        city: 'Москва, Домодедово',
        code: 'DME'
    },
    {
        city: 'Екатеринбург',
        code: 'SVX'
    },
    {
        city: 'Минеральные Воды',
        code: 'MRV'
    },
    {
        city: 'Ереван',
        code: 'EVN'
    },
    {
        city: 'Батуми',
        code: 'BUS'
    },
    {
        city: 'Анкара',
        code: 'ESB'
    },
    {
        city: 'Анталия',
        code: 'AYT'
    },
]

export { API_KEY, API_URI, API_SYSTEM, AIROPORT_CODES_IATA }