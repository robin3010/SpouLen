import { observer } from 'mobx-react-lite'
import { Col, Form, Row } from 'react-bootstrap'
import { useStore } from 'entities/calculator'
import { formInit, formInputNames } from 'shared/consts'
import { Button } from 'shared/ui/button'
import { FormControl } from 'shared/ui/input'
import { useHandlers } from '../model/handlers'

export const CalculatorForm = observer(() => {
  const { formData } = useStore()
  const { handleChange, handleReset, handleSubmit } = useHandlers()

  const handleSubmitFn = handleSubmit(formData)

  return (
    <Form
      noValidate
      onSubmit={handleSubmitFn}
      onReset={handleReset}
    >
      <Row>
        <Col sm>
          <FormControl
            label='Высота излива, мм'
            id={formInputNames.spoutH}
            data={formData.spoutH}
            onChange={handleChange}
          />
        </Col>
        <Col sm>
          <FormControl
            label='Длина излива, мм'
            id={formInputNames.spoutL}
            data={formData.spoutL}
            onChange={handleChange}
          />
        </Col>
        <Col sm='5'>
          <FormControl
            label='Угол наклона излива'
            id={formInputNames.spoutAngle}
            data={formData.spoutAngle}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <FormControl
            label='Высота чаши мойки | раковины, мм'
            id={formInputNames.sinkH}
            data={formData.sinkH}
            onChange={handleChange}
          />
        </Col>
        <Col sm>
          <FormControl
            label='Расстояние до центра слива, мм'
            id={formInputNames.sinkDrain}
            data={formData.sinkDrain}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Col>
        <FormControl
          label='Расстояние до центра монтажного отверстия смесителя, мм'
          id={formInputNames.sinkFaucetShift}
          data={formData.sinkFaucetShift}
          onChange={handleChange}
        />
      </Col>
      <div className='d-flex justify-content-center gap-2 mt-2'>
        <Button
          disabled={JSON.stringify(formData) === JSON.stringify(formInit)}
          variant='primary'
          type='submit'
        >
          Проверить
        </Button>
        <Button
          variant='outline-secondary'
          type='reset'
        >
          Сброс
        </Button>
      </div>
    </Form>
  )
})
