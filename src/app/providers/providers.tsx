import { observer } from 'mobx-react-lite'
import { AppRouter } from 'app/router'
import { StoreProvider } from 'entities/calculator'

export const Providers = observer(() => (
  <StoreProvider>
    <AppRouter />
  </StoreProvider>
))
