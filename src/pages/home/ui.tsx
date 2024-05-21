import { CalculatorForm } from 'features/calculatorForm'
import { Calculator } from 'entities/calculator'
import { CalculatorResult } from 'features/calculatorResult'

export const Home = () => (
  <Calculator
    calculatorForm={<CalculatorForm />}
    calculatorResult={<CalculatorResult />}
  />
)
