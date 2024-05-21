import { useStore } from 'app/store/storeContext'
import { observer } from 'mobx-react-lite'
import { Card, Collapse } from 'react-bootstrap'
import { CloseButton } from 'shared/ui/button'
import { isInRange } from '../model'

export const CalculatorResult = observer(() => {
  const {
    formResult: { showResult, value },
    toggleResult,
    formData: { sinkL },
  } = useStore()

  const matchOrNot = isInRange(value, sinkL)

  return (
    <>
      <Collapse
        in={showResult}
        mountOnEnter
        unmountOnExit
      >
        <div>
          <Card
            border={`${matchOrNot ? 'success' : 'danger'}`}
            className='mt-2'
          >
            <Card.Body>
              <Card.Title>
                <div className='d-flex align-items-center'>
                  {matchOrNot ? 'Подходит' : 'Не подходит'}
                  <CloseButton
                    className='ms-auto'
                    disabled={!showResult}
                    onClick={toggleResult}
                  />
                </div>
              </Card.Title>
              {/* <Card.Subtitle className='mb-2 text-muted'>
                Card Subtitle
              </Card.Subtitle> */}
              <Card.Text>
                Расстояние от монтажного отверстия смесителя до стока: {value}{' '}
                мм Рекомендуемая длина излива: {sinkL - 25}-{sinkL + 25} мм
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </>
  )
})
