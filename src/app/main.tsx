import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '.'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
