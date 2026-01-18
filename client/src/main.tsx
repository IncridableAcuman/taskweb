import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { TaskProvider } from './provider/TaskProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <TaskProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </TaskProvider>
  </BrowserRouter>
)
