import { useStore } from 'app/store/storeContext'
import { observer } from 'mobx-react-lite'
import { FC, ReactNode } from 'react'
import { Form, FormControlProps } from 'react-bootstrap'
import { formVars } from 'shared/config'

interface FormControlPropsWithLabel extends FormControlProps {
  id: (typeof formVars)[number]
  label?: ReactNode
}
export const FormControl: FC<FormControlPropsWithLabel> = observer(
  ({ label, size = 'sm', id, ...controlProps }) => {
    const value = useStore().formData[id]

    return (
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
          value={value}
          size={size}
          autoComplete='off'
        />
      </>
    )
  },
)
