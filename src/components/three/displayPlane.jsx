import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

const DisplayPlane = (props) => {
    const { link } = props
    const camRef = useRef()
    const htmlStyle = {
      overflow: 'hidden',
      width:'100%',
      height:'100%'
    }

    return (
      <div style={{width: 'inherit', height: 'relative'}}>
      <Canvas >
        <PerspectiveCamera ref={camRef} makeDefault position={[-12, 8, -10]}/>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        {/* <mesh>
          <boxGeometry attach="geometry"/>
          <meshStandardMaterial attach="material" opacity={0.5} transparent/>
        </mesh> */}
        <group>
          <Html transform position={[0, 0, 8]} style={{overflow: 'hidden', width:'100%', height:'100%'}}>
            <iframe src={`${link}`} title='blog' width='104%' height='104%' />
          </Html>
          <Html transform position={[8, 0, 0]} rotation={[0, 90 * (Math.PI / 180), 0]} style={htmlStyle}>
            <iframe src={`${link}`} title='blog' width='104%' height='104%' />
          </Html>
          <Html transform position={[-8, 0, 0]} rotation={[0, 270 * (Math.PI / 180), 0]} style={htmlStyle}>
            <iframe src={`${link}`} title='blog' width='104%' height='104%' />
          </Html>
          <Html transform position={[0, 0, -8]} rotation={[0, 180 * (Math.PI / 180), 0]} style={htmlStyle}>
            <iframe src={`${link}`} title='blog' width='104%' height='104%' />
          </Html>
          <Html transform position={[0, -6, 0]} rotation={[90 * (Math.PI / 180), 0, 0]} style={htmlStyle}>
            <iframe src={`${link}`} title='blog' width='104%' height='104%' />
          </Html>
          <Html transform position={[0, 6, 0]} rotation={[90 * (Math.PI / 180), 0, 0]} style={htmlStyle}>
            <iframe src={`${link}`} title='blog' width='104%' height='104%' />
          </Html>
        </group>
      </Canvas>
      </div>
    )
}

export default DisplayPlane
