import { Instance, types } from 'mobx-state-tree'
import {
  CalculatorFormStore,
  CalculatorResultStore,
} from 'entities/calculator/model/store'
import { getSavedToLsForm } from 'entities/calculator'

export interface RootStoreModel extends Instance<typeof RootStore> {}

export const CreateStore = (): RootStoreModel => {
  return RootStore.create({ formData: getSavedToLsForm(), formResult: {} })
}

const RootStore = types.compose(CalculatorFormStore, CalculatorResultStore)
