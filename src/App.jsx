import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [step, setStep] = useState(0)

  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, perspiciatis?',
      bgColor: 'red',
      image: ''
    }
  ]
  
  return (
    <>
    <Card currentCardData = {tutorialData[step]}></Card>
      <div className="card">
        <button onClick={() => setStep((step) => step + 1)}>
          counter is {step}
        </button>
      </div>
    </>
  )
}

export default App
