import { SnapshotOut, getSnapshot, onSnapshot, types } from 'mobx-state-tree'
import { ChangeEvent } from 'react'
import { formInit } from 'shared/consts'
import { CalcForm } from 'shared/types'
import { calculate } from './calculator'
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
      if (!Number.isNaN(+value))
        data[id as keyof SnapshotOut<typeof data>] = +value
    },
    setSinkL() {
      const { sinkDrain, sinkFaucetShift } = self.formData
      // eslint-disable-next-line no-param-reassign
      self.formData.sinkL = sinkDrain + sinkFaucetShift
    },
    reset() {
      // eslint-disable-next-line no-param-reassign
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
      // eslint-disable-next-line prefer-const
      let { formResult: res } = self
      res.value = calculate(submitData)
      if (!res.showResult) this.toggleResult()
    },
    toggleResult() {
      // eslint-disable-next-line prefer-const
      let { formResult: res } = self
      res.showResult = !res.showResult
    },
  }))

export const RootStore = types.compose(
  CalculatorFormStore,
  CalculatorResultStore,
)
