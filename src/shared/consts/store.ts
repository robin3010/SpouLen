import { createServiceObj } from 'shared/lib/store'

export const FORM_KEYS = [
  'sinkDrain',
  'sinkFaucetShift',
  'sinkH',
  'sinkL',
  'spoutAngle',
  'spoutH',
  'spoutL',
] as const

export const formInputNames = createServiceObj(FORM_KEYS)
export const formInit = createServiceObj(FORM_KEYS, 0)

export const FORM_DATA_KEY = 'FORM_DATA_KEY'

export const lStore = window.localStorage
