import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'

import Three from './components/Three'

import './App.css'

function App() {

  return (
    <>
    <Loader />
    <Canvas id='three-canvas-container' shadows>
      <Suspense fallback={null}>
        <Three />
      </Suspense>
    </Canvas>
    </>
  )
}

export default App
