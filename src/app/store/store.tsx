import { Instance, types } from 'mobx-state-tree'
import {
  CalculatorFormStore,
  CalculatorResultStore,
} from 'entities/calculator/model/store'
import { getSavedToLsForm } from 'entities/calculator'

export interface RootStoreModel extends Instance<typeof RootStore> {}

export const createStore = (): RootStoreModel => {
  return RootStore.create({ formData: getSavedToLsForm() })
}

const RootStore = types.compose(CalculatorFormStore, CalculatorResultStore)
