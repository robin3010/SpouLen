import { formVars } from './consts'

type createServiceObjArgType<N, S> = N extends number ? N : S

export const createServiceObj = <T>(value?: T) => {
  return formVars.reduce(
    (acc, key) => {
      return {
        ...acc,
        [key]: value ?? key,
      }
    },
    {} as { [k in (typeof formVars)[number]]: createServiceObjArgType<T, k> },
  )
}
