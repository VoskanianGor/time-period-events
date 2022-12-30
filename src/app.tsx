import React from 'react'
import { CircleProvider } from '~context/circle-context'
import TimePeriodEvents from './pages/time-period-events'
import './styles/index.css'

const App = () => {
  return (
    <main>
      <TimePeriodEvents />
      {/* test muli components */}
      {/* <TimePeriodEvents />
      <TimePeriodEvents />
      <TimePeriodEvents />
      <TimePeriodEvents /> */}
    </main>
  )
}

export default App
