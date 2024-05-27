import { FormKeysType } from 'shared/types/storeTypes'

type createServiceObjArgType<N, S> = N extends number ? N : S

export const createServiceObj = <T>(formKeys: FormKeysType, value?: T) =>
  formKeys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: value ?? key,
    }),
    {} as { [k in (typeof formKeys)[number]]: createServiceObjArgType<T, k> },
  )
