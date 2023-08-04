import { useState } from 'react'
import Body from './components/body'
import './estilos/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Body />
    </section>
  ) 
}

export default App
