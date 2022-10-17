import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Three from './components/three'
import Layout from './components/layout'
import { Loader } from '@react-three/drei'
import './App.css' 


function App() {

  return (
    <div style={{width: window.innerWidth, height:window.innerHeight}}>
      <Loader />
      <Layout />  
      <Canvas id='three-canvas-container' shadows dpr={[1, 2]} >
      {/* <Canvas id='three-canvas-container' shadows dpr={window.devicePixelRatio} > */}
        <Suspense fallback={null}> 
          <Three />
        </Suspense>
      </Canvas> 
    </div>
  )
}

export default App
