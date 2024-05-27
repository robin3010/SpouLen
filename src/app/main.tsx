import React from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './providers'
import './styles/index.scss'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
)
