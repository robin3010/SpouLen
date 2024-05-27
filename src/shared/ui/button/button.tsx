import { FC } from 'react'
import { Button, ButtonProps } from 'react-bootstrap'

export const ButtonDefault: FC<ButtonProps> = ({
  size = 'sm',
  children,
  ...props
}) => (
  <Button
    size={size}
    {...props}
  >
    {children}
  </Button>
)
