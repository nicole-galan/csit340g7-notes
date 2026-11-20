
import { useState, useEffect } from 'react'
import Notes from './components/Notes.jsx'
import Info from './components/Info.jsx'
import { SettingsContext } from './SettingsContext.js'

function App() {
  const [largeText, setLargeText] = useState(() => {
    const saved = localStorage.getItem('largeText')
    return saved === 'true'
  })

  useEffect(() => {
    localStorage.setItem('largeText', largeText)
  }, [largeText])

  return (
    <SettingsContext.Provider value={{ largeText, setLargeText }}>
      <div className={`bg-[#f5f5f5] font-light text-[#111] ${largeText ? 'text-lg' : ''}`}>
        <button
          onClick={() => setLargeText(!largeText)}
          className="fixed right-5 top-5 z-10 rounded bg-white px-4 py-2 shadow"
        >
          {largeText ? 'Normal text' : 'Large text'}
        </button>

        <Notes />
        <Info name="YOUR NAME" />
      </div>
    </SettingsContext.Provider>
  )
}

export default App
