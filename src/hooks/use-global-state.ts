import { createGlobalState } from 'react-hooks-global-state'

const { getGlobalState, setGlobalState, useGlobalState } = createGlobalState({
  activeTimePeriod: 0,
  lastYear: 0,
})

export { getGlobalState, setGlobalState, useGlobalState }
