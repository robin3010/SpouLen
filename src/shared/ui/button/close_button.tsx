import { FC, useEffect, useState } from 'react'
import { CloseButton, CloseButtonProps, Fade } from 'react-bootstrap'

export const CloseButtonStyled: FC<CloseButtonProps> = ({ ...props }) => {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false)
    }, 2e3)
  }, [])

  return (
    <Fade
      in={!isHidden}
      appear
      mountOnEnter
    >
      <CloseButton
        {...props}
        className='ms-auto'
        style={{ fontSize: '.65em' }}
      />
    </Fade>
  )
}
