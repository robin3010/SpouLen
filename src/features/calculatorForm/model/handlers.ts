import { calculate } from 'entities/calculator'
import { ChangeEvent, FormEvent } from 'react'
import { formInit } from 'shared/config'
import { CalcForm } from 'shared/types'

export const handleChangeFn =
  <T>(formData: T, setNewDataWithLS: (data: T) => void) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    const newData = {
      ...formData,
      [id]: +value,
    }
    setNewDataWithLS(newData)
  }

export const handleResetFn =
  (setNewDataWithLS: (data: typeof formInit) => void) => () => {
    setNewDataWithLS(formInit)
  }

export const handleSubmitFn =
  (formData: CalcForm) => (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    console.log(calculate(formData))
  }
