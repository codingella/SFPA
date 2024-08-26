import { createContext, useState } from 'react'

// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const DataContext = createContext(undefined)
const DataDispatchContext = createContext(undefined)

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function DataProvider({ children }) {
  const [data, setData] = useState({
    data_one: 0,
    data_two: 0,
  })

  const updateData = ({ key, value }) => {
    setData((prevState) => {
      return { ...prevState, [key]: value }
    })
  }

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider
        value={(key, value) => updateData({ key: key, value: value })}
      >
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext, DataDispatchContext }
