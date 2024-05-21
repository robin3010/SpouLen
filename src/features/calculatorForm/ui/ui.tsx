import { Col, Form, Row } from 'react-bootstrap'
import { formInputNames } from 'shared/config'
import { FormControl } from 'shared/ui/input'
import { useHandlers } from '../model/handlers'
import { Button } from 'shared/ui/button'
import { observer } from 'mobx-react-lite'
import { useStore } from 'app/store/storeContext'

export const CalculatorForm = observer(() => {
  const { formData } = useStore()
  const { handleChange, handleReset, handleSubmit } = useHandlers()

  const handleSubmitFn = handleSubmit(formData)

  return (
    <>
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
              onChange={handleChange}
            />
          </Col>
          <Col sm>
            <FormControl
              label='Длина излива, мм'
              id={formInputNames.spoutL}
              onChange={handleChange}
            />
          </Col>
          <Col sm='5'>
            <FormControl
              label='Угол наклона излива'
              id={formInputNames.spoutAngle}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <FormControl
              label='Высота чаши мойки | раковины, мм'
              id={formInputNames.sinkH}
              onChange={handleChange}
            />
          </Col>
          <Col sm>
            <FormControl
              label='Расстояние до центра слива, мм'
              id={formInputNames.sinkDrain}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Col>
          <FormControl
            label='Расстояние до центра монтажного отверстия смесителя, мм'
            id={formInputNames.sinkFaucetShift}
            onChange={handleChange}
          />
        </Col>
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
})
