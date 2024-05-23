import { FC, ReactElement, ReactNode } from 'react'
import {
  OverlayTrigger,
  OverlayTriggerProps,
  Tooltip,
  TooltipProps,
} from 'react-bootstrap'
import { OverlayTriggerRenderProps } from 'react-bootstrap/esm/OverlayTrigger'
import './styles.scss'

type TooltipCustomProps = Omit<OverlayTriggerProps, 'children' | 'overlay'> &
  TooltipProps & {
    triggerTitle:
      | ReactElement
      // eslint-disable-next-line no-unused-vars
      | ((props: OverlayTriggerRenderProps) => ReactNode)
  }

export const TooltipCustom: FC<TooltipCustomProps> = ({
  id,
  className,
  triggerTitle,
  placement = 'bottom',
  children,
}) => (
  <OverlayTrigger
    placement={placement}
    delay={{ show: 250, hide: 400 }}
    overlay={
      <Tooltip
        className={className}
        id={id}
      >
        {children}
      </Tooltip>
    }
  >
    {triggerTitle}
  </OverlayTrigger>
)
