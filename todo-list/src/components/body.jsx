import { useEffect, useState } from 'react'
import '../estilos/body.css'
import axios from 'axios'

const body = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=47.60357,-122.32945&subscription-key={Your-Azure-Maps-Subscription-key}')
      } catch (error) {
        console.log('Erro ao acessar a API', error);
      }
    }

    fetchData()
  }, [])

  return (
    <div className="box">
      {data.map(item => {
        <p key={item}>{item}</p>
      })}
    </div>
  )
  }

export default body