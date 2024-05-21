import { CalcForm } from 'shared/types'

const getTanDeg = (deg: number) => {
  const rad = (deg * Math.PI) / 180

  return Math.tan(rad)
}

export const calculate = (args: CalcForm): number => {
  const lenFromAngle = (args.sinkH + args.spoutH) * getTanDeg(args.spoutAngle)

  return Math.round(args.spoutL + lenFromAngle)
}
