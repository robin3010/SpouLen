import { observer } from 'mobx-react-lite'
import { FC, ReactNode } from 'react'
import { Form, FormControlProps } from 'react-bootstrap'
import { FORM_KEYS } from 'shared/consts'

interface FormControlPropsWithLabel extends FormControlProps {
  data: number
  id: (typeof FORM_KEYS)[number]
  label?: ReactNode
}
export const FormControl: FC<FormControlPropsWithLabel> = observer(
  ({ data, label, size = 'sm', id, ...controlProps }) => (
      <>
        {label ? (
          <Form.Label
            column={size}
            htmlFor={id}
          >
            {label}
          </Form.Label>
        ) : null}
        <Form.Control
          // placeholder=''
          {...controlProps}
          id={id}
          value={data}
          size={size}
          autoComplete='off'
        />
      </>
    ),
)
