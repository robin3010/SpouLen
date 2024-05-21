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
      const { formData: data } = self
      if (!isNaN(+value)) data[id as keyof SnapshotOut<typeof data>] = +value
    },
    setSinkL() {
      const { sinkDrain, sinkFaucetShift } = self.formData
      self.formData.sinkL = sinkDrain + sinkFaucetShift
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
    formResult: types.model({
      value: 0,
      showResult: false,
    }),
  })
  .actions((self) => ({
    calculateResult(submitData: CalcForm) {
      let { formResult: res } = self
      res.value = calculate(submitData)
      if (!res.showResult) this.toggleResult()
    },
    toggleResult() {
      let { formResult: res } = self
      res.showResult = !res.showResult
    },
  }))
