import { Routes, Route } from 'react-router-dom'

import Documents from './pages/Documents'
import Chat from './pages/Chat'

import TitleBar from './components/title-bar/TitleBar'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="w-screen">
      <TitleBar />
      <Routes>
        <Route path="/" element={<Documents />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
