import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-gray-900 p-8">
      <div className="flex gap-4 items-center mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer" className="inline-block">
          <img src={viteLogo} alt="Vite logo" className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)]" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer" className="inline-block">
          <img src={reactLogo} alt="React logo" className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_rgba(97,218,255,0.67)] animate-spin-slow" />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>

      <div className="p-8 bg-white/80 rounded-md shadow-md mb-4">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 focus:outline-none focus-visible:ring-4 ring-blue-200"
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-500">Click on the Vite and React logos to learn more</p>
    </div>
  )
}
