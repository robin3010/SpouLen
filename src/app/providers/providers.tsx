import { observer } from 'mobx-react-lite'
import { StoreProvider } from 'app/store/storeContext'
import { AppRouter } from 'app/router'

export const Providers = observer(() => {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  )
})
