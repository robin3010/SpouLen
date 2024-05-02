import { useState } from 'react'
import { Form, Row } from 'react-bootstrap'
import { formDispatchWithLS, getFormLsData } from 'entities/calculator'
import { formInputNames } from 'shared/config'
import { CalcForm } from 'shared/types'
import { FormControl, FormGroup } from 'shared/ui/input'
import {
  handleChangeFn,
  handleResetFn,
  handleSubmitFn,
} from '../model/handlers'
import { Button } from 'shared/ui/button'

export const CalculatorForm = () => {
  const [formData, setFormData] = useState<CalcForm>(() => getFormLsData())

  const setFormDataWithLS = formDispatchWithLS(setFormData)

  const handleChange = handleChangeFn(formData, setFormDataWithLS)

  const handleReset = handleResetFn(setFormDataWithLS)

  const handleSubmit = handleSubmitFn(formData)

  return (
    <>
      <Form
        noValidate
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <Row>
          <FormGroup
            controlId={formInputNames.spoutH}
            sm
          >
            <FormControl
              label='Высота излива, мм'
              value={formData?.spoutH}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId={formInputNames.spoutL}
            sm
          >
            <FormControl
              label='Длина излива, мм'
              value={formData?.spoutL}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId={formInputNames.spoutAngle}
            sm='5'
          >
            <FormControl
              label='Угол наклона излива'
              value={formData?.spoutAngle}
              onChange={handleChange}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup
            controlId={formInputNames.sinkH}
            sm
          >
            <FormControl
              label='Высота чаши мойки | раковины, мм'
              value={formData?.sinkH}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId={formInputNames.sinkDrain}
            sm
          >
            <FormControl
              label='Расстояние до центра слива, мм'
              value={formData?.sinkDrain}
              onChange={handleChange}
            />
          </FormGroup>
        </Row>
        <FormGroup controlId={formInputNames.sinkFaucetShift}>
          <FormControl
            label='Расстояние до центра монтажного отверстия смесителя, мм'
            value={formData?.sinkFaucetShift}
            onChange={handleChange}
          />
        </FormGroup>
        <div className='d-flex justify-content-center gap-2 mt-2'>
          <Button
            variant='primary'
            type='submit'
          >
            Рассчитать
          </Button>
          <Button
            variant='outline-secondary'
            type='reset'
          >
            Сброс
          </Button>
        </div>
      </Form>
    </>
  )
}
