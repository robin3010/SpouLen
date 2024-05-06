import { SnapshotOut, getSnapshot, onSnapshot, types } from 'mobx-state-tree'
import { ChangeEvent } from 'react'
import { CalcForm } from 'shared/types'
import { calculate } from './calculator'
import { formInit } from 'shared/config'
import { saveFormToLs } from './localStorage'

const CalculatorFormData = types.model('CalculatorFormData', formInit)

export const CalculatorFormStore = types
  .model('CalculatorFormStore', {
    formData: CalculatorFormData,
  })
  .actions((self) => ({
    setNewData(e: ChangeEvent<HTMLInputElement>) {
      const { id, value } = e.target
      const { formData } = self
      if (!isNaN(+value))
        formData[id as keyof SnapshotOut<typeof formData>] = +value
    },
    reset() {
      self.formData = { ...formInit }
    },
    save() {
      saveFormToLs(getSnapshot(self.formData))
    },
    afterCreate() {
      onSnapshot(self, this.save)
    },
  }))

export const CalculatorResultStore = types
  .model('CalculatorResultStore', {
    formResult: types.optional(types.number, 0),
  })
  .actions((self) => ({
    calculateResult(submitData: CalcForm) {
      self.formResult = calculate(submitData)
    },
  }))
