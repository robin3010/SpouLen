import { formVars } from './consts'

type createServiceObjArgType<T> = T extends number ? number : string

export const createServiceObj = <T>(value?: T) => {
  return formVars.reduce(
    (acc, key) => {
      return {
        ...acc,
        [key]: value ?? key,
      }
    },
    {} as { [k in (typeof formVars)[number]]: createServiceObjArgType<T> },
  )
}
