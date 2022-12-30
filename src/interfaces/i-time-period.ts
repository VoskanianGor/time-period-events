import type IEvent from './i-event'

interface ITimePeriod {
  category: string
  years: [number, number]
  events: IEvent[]
}

export default ITimePeriod
