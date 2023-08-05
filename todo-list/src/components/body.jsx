import { useEffect, useState } from 'react'
import '../estilos/body.css'
import axios from 'axios'

const body = () => {
  const [data, setData] = useState(null)
  const [temperature, setTemperature] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/-23.46603220342741%2C%20-46.42326288965758?unitGroup=metric&key=D2ZTJHGFWFRY3HY9SM83UAAC5&contentType=json'
        )
        
        setData(response.data)
        const temp = response.data.days[0].temp
        setTemperature(temp)
      } catch (error) {
        console.log('Erro ao acessar a API', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={`box ${getBackgroundImageClass()}`}>
      {data ? (
        <>
          <h1 className="temp">{data.days[0].temp}º</h1>
          <p className="sub-temp">
            {data.days[0].tempmax}º / {data.days[0].tempmin}º
          </p>
          <p className="temp-description">{data.description}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  )

  function getBackgroundImageClass() {
    if (temperature !== null) {
      if (temperature < 10) {
        return 'frio'
      } else {
        return 'sol'
      }
    }

    return ''
  }
}

export default body