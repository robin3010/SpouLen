import { FC, ReactNode } from 'react'
import { Card } from 'react-bootstrap'

interface CalculatorProps {
  calculatorForm: ReactNode
  calculatorResult: ReactNode
}

export const Calculator: FC<CalculatorProps> = ({
  calculatorForm,
  calculatorResult,
}) => {
  return (
    <Card
      body
      // style={{ width: '50%' }}
    >
      {calculatorForm}
      {calculatorResult}
    </Card>
  )
}
