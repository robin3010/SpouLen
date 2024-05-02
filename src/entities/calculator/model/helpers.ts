import { Dispatch, SetStateAction } from 'react'
import { setFormLsData } from './localStorage'

export const formDispatchWithLS =
  <T>(setFormFn: Dispatch<SetStateAction<T>>) =>
  (data: T) => {
    setFormFn(data)
    setFormLsData(data)
  }
