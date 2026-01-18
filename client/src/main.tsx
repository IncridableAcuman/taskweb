import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider.tsx';
import { TaskProvider } from './provider/TaskProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <TaskProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </TaskProvider>
    </ThemeProvider>
  </BrowserRouter>
)
