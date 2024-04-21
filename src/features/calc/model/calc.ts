import { CalcForm } from 'shared/types'

const getTanDeg = (deg: number) => {
  const rad = (deg * Math.PI) / 180

  return Math.tan(rad)
}

export const calc = (P: CalcForm): number => {
  const lenFromAngle = (P.sinkH + P.spoutH) * getTanDeg(P.spoutAngle)

  return P.spoutL + lenFromAngle
}
