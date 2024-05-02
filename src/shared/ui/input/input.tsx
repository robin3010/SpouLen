import { FC, ReactNode } from 'react'
import {
  Col,
  ColProps,
  Form,
  FormControlProps,
  FormGroupProps,
} from 'react-bootstrap'

interface FormControlPropsWithLabel extends FormControlProps {
  label?: ReactNode
}

interface FormGroupPropsWithCol extends FormGroupProps, ColProps {
  col?: boolean
}

export const FormControl: FC<FormControlPropsWithLabel> = ({
  label,
  size = 'sm',
  ...controlProps
}) => (
  <>
    {label ? <Form.Label column={size}>{label}</Form.Label> : null}
    <Form.Control
      // placeholder=''
      {...controlProps}
      size={size}
      autoComplete='off'
    />
  </>
)

export const FormGroup: FC<FormGroupPropsWithCol> = ({
  col = true,
  children,
  ...groupProps
}) => (
  <Form.Group
    {...groupProps}
    as={col ? Col : undefined}
  >
    {children}
  </Form.Group>
)
