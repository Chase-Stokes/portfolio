import { Environment, OrbitControls, PerspectiveCamera, useTexture, Preload } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { angleToRadians } from "../../utils/angle"
import gsap from 'gsap'

import Cube from './cube'
import Enviro from './enviro'
import Stars from './stars'
import Light from './light'

import * as THREE from 'three'

export default function Three() {

  const cameraRef = useRef(null)
  
  useEffect(() => {
    console.log(cameraRef)
  }, [])

  useFrame(() => {
    const t = document.body.getBoundingClientRect().top
    cameraRef.current.position.z = t * -0.01
    cameraRef.current.position.x = t * -0.0002
    cameraRef.current.position.y = t * -0.0002
  })

  // //code below used to move camera around
  // useFrame((state) => {
  //   //use frame runs at least 60 times a second depends on refresh rate
  //   if(!!orbitControlsRef.current){
  //     const { x, y } = state.mouse //normalized coords only range from -1 to 1
  //     orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45))
  //     orbitControlsRef.current.setPolarAngle((y + 1.5) * angleToRadians(90 - 30))
  //     orbitControlsRef.current.update()
  //   }
  //   // console.log(state.mouse)
  // })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[-10, 30, 0]}/>
      <Light/>
      <Cube/>
      <Stars/>
      <spotLight args={['#ffffff', 2, 20, angleToRadians(45), .4, 1]} position={[-5, 2, 2]} castShadow />
      <Enviro />
      <Preload all />
    </>
  )
}

