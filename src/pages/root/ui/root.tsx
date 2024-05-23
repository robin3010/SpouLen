import { Container } from 'react-bootstrap'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'

export const Root = () => (
  <>
    <Header />
    <Container className='main-wrapper'>
      <Outlet />
    </Container>
    <Footer />
    <ScrollRestoration />
  </>
)
