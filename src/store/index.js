import React from 'react'

/**
 *  This is the most important file regarding state management. 
 *  For this project size I decided to use core React context setup. The interface is almost identical to redux.
 *  What you might implement with redux thunks or sagas might be achievable with hooks, albeit redux does cover usecases core-react wont.
 */

const INITIAL_STATE = {
  homes: [],
  lots: [],
  combinations: [],
  likes: {},
  modals: {}
}

function reducer(state, action) {
  switch(action.type) {
    case 'LOAD':
      return { ...state, [action.key]: action.payload }
    case 'SHOW_MODAL':
      return { ...state, modals: { [action.key]: action.payload } }
    case 'HIDE_MODAL':
      return { ...state, modals: {}}
    case 'ADD_LIKE': {
      return { ...state, likes: { ...state.likes, [action.key]: action.payload }}
    }
    case 'REMOVE_LIKE': {
      if (state.likes[action.key]) {
        const newState = { ...state }
        delete newState.likes[action.key]
        return newState
      }
    }
  }
  return state
}

export const TerraContext = React.createContext()

export function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)

  return (
    <TerraContext.Provider value={{ state, dispatch }}>
      {children}
    </TerraContext.Provider>
  )
}

// HOC to easily wrap pages with the store.
export function withStore(Component) {
 return (props) => <StoreProvider><Component {...props} /></StoreProvider>
}
