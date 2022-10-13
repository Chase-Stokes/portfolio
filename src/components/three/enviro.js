import { Environment } from '@react-three/drei'
import { BackSide } from 'three'

import bgImg from '../../assets/space.jpg'

export default Enviro = () => {
  return (
    <Environment files={bgImg} >
      <mesh position={[-2, 4, 0]} >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <meshStandardMaterial attach="material" side={BackSide} />
      </mesh>
    </Environment>
  )
}