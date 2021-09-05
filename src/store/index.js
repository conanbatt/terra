import React from 'react'

const INITIAL_STATE = {
  homes: [],
  lots: [],
  combinations: [],
  modals: {}
}

function reducer(state, action) {
  console.log('actions', state, action)
  switch(action.type) {
    case 'LOAD':
      return { ...state, [action.key]: action.payload }
    case 'SHOW_MODAL':
      return { ...state, modals: { [action.key]: action.payload } }
    case 'HIDE_MODAL':
      return { ...state, modals: {}}
  }
}

export const TerraContext = React.createContext()

export const useStoreContext = () => React.useContext(TerraContext)

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  return (
    <TerraContext.Provider value={{ state, dispatch }}>
      {children}
    </TerraContext.Provider>
  )
}

export function withStore(Component) {
 return (props) => <StoreProvider><Component {...props} /></StoreProvider>
}
