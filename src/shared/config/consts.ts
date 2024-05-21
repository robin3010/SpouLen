import { createServiceObj } from './helpers'

export const formVars = [
  'sinkDrain',
  'sinkFaucetShift',
  'sinkH',
  'sinkL',
  'spoutAngle',
  'spoutH',
  'spoutL',
] as const

export const formInputNames = createServiceObj()
export const formInit = createServiceObj(0)

export const FORM_DATA_KEY = 'FORM_DATA_KEY'

export const lStore = window.localStorage
