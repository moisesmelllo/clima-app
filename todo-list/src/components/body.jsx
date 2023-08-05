import { useEffect, useState } from 'react'
import '../estilos/body.css'
import axios from 'axios'

const body = () => {
  const [data, setData] = useState(null)
  const [temperature, setTemperature] = useState(null)
  const [BackgroundImageClass, setBackgroundImageClass] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/-23.465894422053744,-46.423295076164536?unitGroup=metric&key=D2ZTJHGFWFRY3HY9SM83UAAC5&contentType=json'
        )
        
        setData(response.data)
        const temp = response.data.days[0].temp
        setTemperature(temp)
      } catch (error) {
        console.log('Erro ao acessar a API', error)
        setTemperature(29)
      }
    }

    fetchData()
  }, [])
  
  useEffect(() => {
    if (temperature != null) {
      setBackgroundImageClass(getBackgroundImageClass())
    }
  }, [temperature]);

    function getBackgroundImageClass() {
      if (temperature !== null) {
        if (temperature < 10) {
          return 'frio'
        } else if (temperature < 30) {
          return 'sol'
        } else {
          return 'hot'
        }
      }
    }

  return (
    <div className={`box ${BackgroundImageClass}`}>
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

  
}

export default body