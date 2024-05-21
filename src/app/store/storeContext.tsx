import Reactotron from 'reactotron-react-js'
import { mst } from 'reactotron-mst'
import { FC, PropsWithChildren, createContext, useContext } from 'react'
import { RootStoreModel, CreateStore } from './store'

const StoreContext = createContext({} as RootStoreModel)

const rootStore = CreateStore()

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  )
}
export const useStore = () => useContext(StoreContext)

const reactotron = Reactotron.use(mst()).connect()
reactotron.trackMstNode(rootStore)
