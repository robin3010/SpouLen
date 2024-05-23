import { CalculatorForm } from 'features/calculatorForm'
import { CalculatorResult } from 'features/calculatorResult'
import { Calculator } from 'entities/calculator'

export const Home = () => (
  <Calculator
    calculatorForm={<CalculatorForm />}
    calculatorResult={<CalculatorResult />}
  />
)
