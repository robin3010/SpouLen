import { FC, PropsWithChildren, createContext } from 'react'
import { mst } from 'reactotron-mst'
import Reactotron from 'reactotron-react-js'
import { CreateStore, RootStoreModel } from './store'

export const StoreContext = createContext({} as RootStoreModel)

const rootStore = CreateStore()

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
)

if (import.meta.env.MODE !== 'production') {
  const reactotron = Reactotron.use(mst()).connect()
  reactotron.trackMstNode(rootStore)
}
