import { useEffect, useRef, useState } from 'react'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import chihiro from '../../assets/chihiro.jpg'

export default function Cube() {

  const [chihiroTexture] = useTexture([chihiro])
  // const [scrolling, setScrolling] = useState(window.pageYOffset)
  const cubeRef = useRef(null)

  /// Lines 16-34 is a scroll animation that works but its not quite what I want

  // gsap.registerPlugin(ScrollTrigger)
  // const randomRotation = () => {
  //   return gsap.utils.random(1, 180) * (Math.random() < 0.5 ? 1 : -1)
  // }

  // useEffect(() => {
  //   if(!!cubeRef.current){
  //     gsap.to(cubeRef.current.rotation, {
  //       scrollTrigger: {
  //         scrub: true,
  //       },
  //       x: randomRotation(),
  //       y: randomRotation(),
  //       z: randomRotation(),
  //       duration: 3,
  //       ease: 'power3.in',
  //   })
  //   }
  // }, [cubeRef.current])
  

  /// Lines 38 - 51 is a scroll animation that works but its not quite what I want. Useframe would need a conditional to check if {scrolling is true} to run the animation
  // let userHasScrolled = false;  
  // window.onwheel = (e) => {
  //   if(scrolling !== window.pageYOffset){
  //     userHasScrolled = true
  //     setScrolling(window.pageYOffset)
  //   } else {
  //     userHasScrolled = false
  //   }
  // }
  useFrame(() => {
    cubeRef.current.rotation.x += .05
    cubeRef.current.rotation.y += .075
    cubeRef.current.rotation._z += .05
  })

  return (
    <>
    <mesh ref={cubeRef} >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={chihiroTexture} />
    </mesh>
    </>
  )
}
