import { Instance } from 'mobx-state-tree'
import { getSavedToLsForm } from 'entities/calculator'
import { RootStore } from './storeSchema'

// const RootStore = types.compose(CalculatorFormStore, CalculatorResultStore)

export interface RootStoreModel extends Instance<typeof RootStore> {}

export const CreateStore = (): RootStoreModel =>
  RootStore.create({ formData: getSavedToLsForm(), formResult: {} })
