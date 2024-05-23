import { useContext } from 'react'
import { StoreContext } from '../model/storeContext'

export const useStore = () => useContext(StoreContext)
