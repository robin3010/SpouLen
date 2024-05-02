import { FC, ReactNode } from 'react'
import { Card } from 'react-bootstrap'

interface CalculatorProps {
  calculatorForm: ReactNode
}

export const Calculator: FC<CalculatorProps> = ({ calculatorForm }) => {
  return (
    <Card
      body
      // style={{ width: '50%' }}
    >
      {calculatorForm}
    </Card>
  )
}
