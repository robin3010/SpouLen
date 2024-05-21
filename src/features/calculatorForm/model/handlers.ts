import { useStore } from 'app/store/storeContext'
import { ChangeEvent, FormEvent, useMemo } from 'react'
import { CalcForm } from 'shared/types'

export const useHandlers = () => {
  const { setNewData, reset, calculateResult, setSinkL } = useStore()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewData(e)
  }

  const handleReset = () => {
    reset()
  }

  const handleSubmit =
    (formData: CalcForm) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSinkL()
      calculateResult(formData)
    }

  const handlers = useMemo(
    () => ({
      handleChange,
      handleReset,
      handleSubmit,
    }),
    [],
  )

  return handlers
}
