import { createContext } from 'react'
import AuthContext from '../contexts/AuthContext.js'

/*
  {
      user,
      token,
      isAuthenticated,
      setUser,
      logout
  }
*/

function useAuth() {
  return createContext(AuthContext)
}

export default useAuth
