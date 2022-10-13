import { Environment, PerspectiveCamera, useTexture, Preload } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { WebGLRenderer } from "three"
import { LayerMaterial, Depth, Noise } from "lamina"
import gsap from "gsap"

import { generateStars } from "../../utility/generatedStars"

import Enviro from "./enviro"

export default Three = () => {
  
  Array(200).fill().forEach(generateStars)
  return (
    <>
    <Preload all />
    <Enviro />
    </>
  )
}