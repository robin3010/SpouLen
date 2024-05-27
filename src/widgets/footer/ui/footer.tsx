import { Col, Container, Row } from 'react-bootstrap'
import { FooterLinks } from 'shared/ui/links'
import './footer.scss'
import { getCopyrightSig } from '../lib/helpers'

export const Footer = () => (
  <footer className='bg-secondary-subtle mt-3 py-4'>
    <Container
      fluid
      className='container text-center text-md-start'
    >
      <Row
        className='align-items-center'
        xs={1}
        md={3}
      >
        <Col
          xs={12}
          sm='auto'
          md={6}
        >
          {getCopyrightSig()}
        </Col>
        <Col
          className='text-md-end'
          xs={12}
          sm='auto'
          md={3}
        >
          by Aleksey Klimov
        </Col>
        <Col
          className='d-flex gap-3 justify-content-center'
          xs={12}
          sm='auto'
          md={3}
        >
          <FooterLinks />
        </Col>
      </Row>
    </Container>
  </footer>
)
