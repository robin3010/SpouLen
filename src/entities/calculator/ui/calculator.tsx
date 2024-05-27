import { FC, ReactNode } from 'react'
import { Tooltip } from 'shared/ui/tooltip'
import './calculator.scss'

interface CalculatorProps {
  calculatorForm: ReactNode
  calculatorResult: ReactNode
}

export const Calculator: FC<CalculatorProps> = ({
  calculatorForm,
  calculatorResult,
}) => (
  <>
    <header className='pb-4'>
      <h5>
        Проверка совместимости смесителя и раковины{' '}
        <Tooltip
          className='container tooltip-wide'
          id='header-tooltip'
          triggerTitle={<sup className='superscript'>?</sup>}
        >
          Излив смесителя должен быть такой длины, чтобы вода при полном напоре
          попадала не на стенки раковины, а ровно на ее дно: либо на сливной
          клапан, либо, если раковина широкая, — между сливным клапаном и
          передней стенкой
        </Tooltip>
      </h5>
    </header>
    {calculatorForm}
    {calculatorResult}
  </>
)
