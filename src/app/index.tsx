import { createRoot } from 'react-dom/client'
import { Pages } from '../pages'
import React from 'react'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
)
