import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout-area/layout/layout'
import './index.css'
import { interceptor } from './utils/interceptor'
import favicon from './assets/favicon.png'

// Set favicon dynamically from src/assets:
const link = (document.querySelector("link[rel~='icon']") as HTMLLinkElement) || document.createElement('link')
link.type = 'image/png'
link.rel = 'icon'
link.href = favicon
document.head.appendChild(link)

// Create interceptor:
interceptor.create()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)