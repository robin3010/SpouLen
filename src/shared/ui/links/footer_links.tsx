import { FC } from 'react'
import { LINKS } from 'shared/consts'
import { FooterLinkProps } from 'shared/types'

const FooterLink: FC<FooterLinkProps> = ({ href, icon }) => (
  <a
    target='_blank'
    aria-label='Link'
    href={href}
    className='link-body-emphasis footer-link'
    rel='author noreferrer'
  >
    <i className={`bi bi-${icon}`} />
  </a>
)

export const FooterLinks = () => (
  <>
    {LINKS.map((el, inx) => (
      <FooterLink
        // eslint-disable-next-line react/no-array-index-key
        key={inx}
        {...el}
      />
    ))}
  </>
)
